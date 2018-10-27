import { GraphQLSchema } from "graphql";
import { makeExecutableSchema, gql } from "apollo-server-express";

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
  `
});

export default userSchema;
