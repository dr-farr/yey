import { IntegrationDefaultType } from '@prisma/client';
import prisma from 'utils/database/prisma';

export const upsertIntegrationQuery = (
  userId: string,
  teamId: string,
  config: object,
  authAccId: string,
  type: IntegrationDefaultType,
) =>
  prisma.integrationDefault.upsert({
    where: {
      teamId_accountId_type: {
        teamId: teamId,
        accountId: authAccId,
        type: type,
      },
    },
    create: {
      team: {
        connect: {
          id: teamId,
        },
      },
      account: {
        connect: {
          id: authAccId,
        },
      },
      type: type,
      owner: {
        connect: {
          id: userId,
        },
      },
      config: config,
    },
    update: {
      updatedAt: new Date().toISOString(),
    },
  });

export const upsertIntegrationDefault = async (
  userId: string,
  teamId: string,
  config: object,
  authAccId: string,
  type: IntegrationDefaultType,
) => {
  await upsertIntegrationQuery(userId, teamId, config, authAccId, type);
};
