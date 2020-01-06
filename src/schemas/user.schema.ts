import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

const userSchema: GraphQLSchema = makeExecutableSchema({
  typeDefs: `
    type User {
      id: ID!
      email: String
    }

    type Query {
      helloUser: String
      userById(id: ID!): User
    }

    type Mutation {
      createUser: User
    }
  `,
});

export default userSchema;
