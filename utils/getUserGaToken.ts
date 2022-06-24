import prisma from 'utils/database/prisma';
import { User } from 'utils/database/context';

export default async function getUserGaToken(user: User) {
  const tokens = await prisma.account.findMany({
    where: { userId: user.userId, providerId: 'google-with-ga' },
  });
  if (tokens.length === 0) {
    throw new Error('No tokens found for user');
  } else {
    return tokens[0];
  }
}
