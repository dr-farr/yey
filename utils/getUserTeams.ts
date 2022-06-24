import prisma from 'utils/database/prisma';
import { User } from 'utils/database/context';

export default async function getUserTeams(user: User) {
  return await prisma.user.findUnique({ where: { id: user.userId } }).teams();
}
