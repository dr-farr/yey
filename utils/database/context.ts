import { getSession } from 'adapters/sessions';
import { MicroRequest } from 'apollo-server-micro/dist/types';
import DataLoader from 'dataloader';
import { ServerResponse } from 'http';
import { UserType, Onboards, SubscriptionStatus } from 'truenorth-graphql';
import prisma from './prisma';

export interface Context {
  res: ServerResponse;
  req: MicroRequest;
  getLoader<T>(key: string): DataLoader<string, T | null> & {
    loadAcceptNull: (id: string | null) => T | null;
  };
}

export interface User {
  name: string;
  email: string;
  image: string;
  userId: string;
  selectedTeamId: string;
  subscriptionStatus: SubscriptionStatus | undefined;
  subscriptionActive: boolean;
  completedOnboards: Onboards[];
  type: UserType;
  acceptNotificationEmails: boolean;
  isDemo: boolean;
  paywall: boolean;
}

const createLoaderCache = () => {
  const cache = {};
  return function getLoaderCache<T>(key: string) {
    if (!cache[key]) {
      cache[key] = new DataLoader<string, T | null>(async (ids) => {
        // Load all of the <T> for the list of arrays
        const data = await prisma[key].findMany({
          where: { id: { in: [...ids] } },
        });

        // To make for more efficient lookup, convert to a Map of id => <T> records
        const dataMap = data.reduce((acc, item) => acc.set(item.id, item), new Map<string, T>());

        // Map the ids back to the loaded <T> record
        return ids.map((id) => dataMap.get(id) ?? null);
      });
    }
    return {
      ...cache[key],
      loadAcceptNull: (id: string | null) => (id ? cache[key].load(id) : null),
    };
  };
};

export async function createContext({ res, req }): Promise<Context> {
  await getSession({ req });
  return { res, req, getLoader: createLoaderCache() };
}
