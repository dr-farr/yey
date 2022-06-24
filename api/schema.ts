import { join } from 'path';
import * as types from './graphql';
import { makeSchema, fieldAuthorizePlugin } from 'nexus';
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema';
import { GraphQLScalarType } from 'graphql';
import { db } from './db';
import path from 'path';

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(__dirname, '..', 'nexus-typegen.ts'), // 2
    schema: join(__dirname, '..', 'schema.graphql'), // 3
  },
  contextType: {
    module: join(__dirname, './context.ts'),
    export: 'Context',
  },
  plugins: [
    nexusSchemaPrisma({
      shouldGenerateArtifacts: process.env.NODE_ENV === 'development',
      prismaClient: () => db,
      scalars: {
        DateTime: new GraphQLScalarType({
          name: 'DateTime',
          description: 'DateTime',
          serialize(data) {
            return data.toISOString();
          },
          parseValue(data) {
            return new Date(data);
          },
          parseLiteral(ast) {
            //@ts-ignore
            return new Date(ast.value).toISOString();
          },
        }),
      },
      experimentalCRUD: true,
      paginationStrategy: 'prisma', // required!
      outputs: {
        typegen: path.join(process.cwd(), 'nexus-prisma-typegen.ts'),
      },
    }),
    fieldAuthorizePlugin(),
  ],
});
