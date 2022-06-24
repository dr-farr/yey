import prisma from 'utils/database/prisma';

/**
 * Remove a user and all it's assiocated Ideas, Funnel, Teams, Invites! Savage delete
 * This should only be used for testing purposes
 * @param email
 */

export async function cascadingUserDelete(email: string) {
  try {
    if (process.env.NODE_ENV === 'production' || !email) {
      throw Error('Unauthorized');
    }
    const { id = '', selectedTeamId = '' } = await prisma.user.findUnique({
      where: { email: email },
    });
    console.log('DELETING', id, selectedTeamId);
    if (!id) {
      throw Error('User does not exist');
    }

    if (id) {
      await prisma.userTeam.deleteMany({ where: { userId: id } });
      await prisma.campaign.deleteMany({ where: { userId: id } });
      await prisma.ideaSession.deleteMany({ where: { requestedById: id } });
      await prisma.idea.deleteMany({ where: { userId: id } });
      await prisma.goal.deleteMany({ where: { userId: id } });
      const funnel = await prisma.funnel.findFirst({
        where: { userId: id },
      });

      if (funnel) {
        await prisma.funnelDataPointValue.deleteMany({
          where: { funnelId: funnel?.id },
        });
        await prisma.funnelEdge.deleteMany({ where: { funnelId: funnel?.id } });
        await prisma.funnelNode.deleteMany({ where: { funnelId: funnel?.id } });
      }
      await prisma.funnel.deleteMany({ where: { userId: id } });
      await prisma.account.deleteMany({ where: { userId: id } });
      await prisma.tag.deleteMany({ where: { userId: id } });
      const sub = await prisma.subscription.findMany({
        where: { userId: id },
      });
      if (sub.length) {
        await prisma.subscriptionEvent.deleteMany({
          where: { subscriptionId: sub[0]?.id },
        });
      }
      await prisma.subscription.deleteMany({
        where: { userId: id },
      });
      await prisma.session.deleteMany({ where: { userId: id } });
      await prisma.teamInvite.deleteMany({ where: { ownerId: id } });
      await prisma.user.delete({ where: { id: id } });
      await prisma.userTeam.deleteMany({ where: { userId: id } });
      if (selectedTeamId) {
        await prisma.team.delete({ where: { id: selectedTeamId } });
      }
      console.log(`${email} HAS BEEN DELETED`);
      return;
    }
  } catch (error) {
    console.log('TEAR DOWN SCRIPT ERROR', error);
    return error;
  }
}
