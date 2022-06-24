import { Prisma, PrismaClient } from '@prisma/client';
import { PHASE_PRODUCTION_BUILD } from 'next/constants';

interface Global {
  prisma: PrismaClient;
}

declare const global: Global;

let prisma: PrismaClient;

const connect = (prisma) => {
  const now = Date.now();
  console.log('> Connecting Prisma');
  prisma
    .$connect()
    .then(() => {
      console.log(`> Prisma Connected in ${Date.now() - now}ms`);
    })
    .catch((error) => console.error(error));
};
if (typeof window === 'undefined' && process.env.NEXT_PHASE !== PHASE_PRODUCTION_BUILD) {
  if (!global.prisma) {
    const log: Prisma.LogLevel[] = ['info', 'warn', 'error'];

    global.prisma = new PrismaClient({
      log,
    });
    connect(global.prisma);
  }
  prisma = global.prisma;
}

export default prisma;
export { PrismaClient };
