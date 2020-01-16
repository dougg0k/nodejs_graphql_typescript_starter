import { IResolvers } from "graphql-tools";

const userResolver: IResolvers = {
  User: {
    email: () => {
      return "email@email.com";
    },
  },
  Query: {
    getUser: async (parent, args, context, info) => {
      return { email: "user@user.com" };
    },
  },
  Mutation: {
    createUser: () => {
      return "String";
    },
  },
};

export default userResolver;
