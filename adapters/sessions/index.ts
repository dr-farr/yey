import { useSession as _useSession, getSession as _getSession } from 'next-auth/client';
import { User as _User, Session as _Session } from 'next-auth';
import { User } from 'utils/database/context';
import prisma from 'utils/database/prisma';
import { SubscriptionStatus } from 'truenorth-graphql';
import { updateIntercomCustomAttribute } from 'utils/intercom';
import Dedup from 'utils/dedup';

/**
 * A boosted version of {@link _Session} that contains fields
 * extracted from {@link User}, notably
 * {@link User.userId} and {@link User.completedOnboards}
 *
 * This should be used in place of the regular next-auth session type.
 */
export type Session = _Session & {
  user: _User & User;
};

/**
 * Boost the useSession hook to cast to a modified session type containing
 * injected userId information
 */
export function useSession(): [Session, boolean] {
  //@ts-ignore
  const [session, loading]: [Session, boolean] = _useSession();
  return [session, loading];
}

export async function getSessionUser(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      completedOnboards: true,
      createdAt: true,
      email: true,
      image: true,
      acceptNotificationEmails: true,
      selectedTeamId: true,
      type: true,
      teams: {
        select: {
          team: {
            select: {
              id: true,
              completedOnboards: true,
              isDemo: true,
              subscriptions: {
                take: 1,
                orderBy: { createdAt: 'desc' },
                select: {
                  status: true,
                },
              },
            },
          },
        },
      },
    },
  });
  const sessionUser: _User & User = {
    ...user,
    createdAt: user.createdAt.toISOString(),
    userId: user.id,
    isDemo: false,
    paywall: false,
    subscriptionActive: false,
    subscriptionStatus: SubscriptionStatus.INCOMPLETE,
  } as _User & User;

  if (!user.selectedTeamId) {
    if (user.teams.length) {
      updateIntercomCustomAttribute({
        teams: JSON.stringify(user.teams.map(({ team }) => team.id)),
      });

      await prisma.user.update({
        where: { id: user.id },
        data: {
          selectedTeam: { connect: { id: user.teams[0].team.id } },
          type: 'BETA',
        },
      });

      sessionUser.selectedTeamId = user.teams[0].team.id;
    }
  }
  if (sessionUser.selectedTeamId) {
    sessionUser.paywall = true;
    const selectedMembership = user.teams.find(
      ({ team }) => team.id === sessionUser.selectedTeamId,
    );
    if (selectedMembership) {
      if (selectedMembership.team.subscriptions[0]?.status) {
        const { status } = selectedMembership.team.subscriptions[0];
        sessionUser.paywall =
          status !== SubscriptionStatus.TRIALING && status !== SubscriptionStatus.ACTIVE;
      }
      //@ts-ignore
      sessionUser.completedOnboards = Dedup([
        ...sessionUser.completedOnboards,
        ...selectedMembership.team.completedOnboards,
      ]);
      sessionUser.isDemo = selectedMembership.team?.isDemo;
    }
  }
  return sessionUser;
}

/**
 * boost the getSession function to include the injected userId type
 */
export async function getSession(context?: Parameters<typeof _getSession>[0]): Promise<Session> {
  if ((context as any).req.session) {
    console.log('=== Session from cache');
    return Promise.resolve((context as any).req.session);
  }
  if (!process?.browser) {
    const { cookies } = (context as any).req;
    const token = cookies['next-auth.session-token'] || cookies['__Secure-next-auth.session-token'];
    if (token) {
      const now = Date.now();
      const session = await prisma.session.findUnique({
        where: { sessionToken: token },
        select: {
          expires: true,
          accessToken: true,
          id: true,
          userId: true,
        },
      });
      if (session) {
        const user = await getSessionUser(session.userId);
        if (user) {
          console.log('=== Session from DB', Date.now() - now, 'ms');
          const returnSession = {
            ...session,
            expires: session.expires.toISOString(),
            user,
          };
          (context as any).req.session = returnSession;
          return returnSession;
        }
      }
    }
  }
  const session = _getSession(context);
  (context as any).req.session = session;
  return Promise.resolve(session) as Promise<Session>;
}
