import { IResolvers } from "graphql-tools";

const userResolver: IResolvers = {
  Query: {
    helloUser: async (_, __, ___) => {
      return "Hello User";
    }
    // queryName: async (obj, args, context, info) => {
    //   // return
    // }
  },
  Mutation: {
    // mutationName: async (parent, args, context, info) => {
    //   // return
    // }
  }
};

// You can mock here if you need

export default userResolver;
