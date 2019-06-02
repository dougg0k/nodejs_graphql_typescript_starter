import { gql, makeExecutableSchema } from 'apollo-server-fastify';
import { GraphQLSchema } from 'graphql';

const userSchema: GraphQLSchema = makeExecutableSchema({
  typeDefs: gql`
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
