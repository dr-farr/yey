import { ApolloServer } from 'apollo-server-micro';
import { schema } from 'utils/database/schema';
import { createContext } from 'utils/database/context';

export const server = new ApolloServer({
  schema,
  context: createContext,
  tracing: process.env.NODE_ENV === 'development',
});

export default server;
