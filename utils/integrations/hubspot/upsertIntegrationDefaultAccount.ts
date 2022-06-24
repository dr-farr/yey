import prisma from 'utils/database/prisma';
import Sentry from 'utils/sentry';
import { IntegrationDefaultType } from 'truenorth-graphql';
import { ProviderAccountType } from 'constants/integrationMap';

/**
 * Adds a default account for an integration
 *
 * @param provider: ProviderAccountType
 * @param teamId: selected team
 * @param userId: user id
 * @param config: Default Account Config for Integration
 *
 *
 * @returns Proimse<Account>
 *
 */
export const upsertIntegrationDefaultAccount = async (
  providerId: ProviderAccountType,
  teamId: string,
  userId: string,
  config: { id: string; name: string; accountType: string },
) => {
  try {
    const account = await prisma.account.findUnique({
      where: { userId_providerId: { userId, providerId: providerId } },
    });

    if (account == undefined) {
      throw new Error('Auth account not found, unable to make integration default account');
    }

    return await prisma.integrationDefault.upsert({
      where: {
        teamId_accountId_type: {
          teamId: teamId,
          accountId: account.id,
          type: IntegrationDefaultType.ACCOUNT,
        },
      },
      create: {
        config: config,
        team: { connect: { id: teamId } },
        account: { connect: { id: account.id } },
        owner: { connect: { id: userId } },
        type: IntegrationDefaultType.ACCOUNT,
      },
      update: {
        config: config,
      },
    });
  } catch (e) {
    Sentry.captureException(e);
  }
};
