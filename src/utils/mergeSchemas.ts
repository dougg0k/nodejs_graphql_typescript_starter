import { mergeSchemas } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';

import userResolver from '../resolvers/user.resolver';
import userSchema from '../schemas/user.schema';

export const createSchema = async (): Promise<GraphQLSchema> => {
  return mergeSchemas({
    schemas: [userSchema],
    resolvers: [userResolver],
  });
};
