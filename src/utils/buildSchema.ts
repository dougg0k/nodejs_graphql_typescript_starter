import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import * as path from "path";

const typesArray = fileLoader(path.join(__dirname, "../schemas/*.graphql"));
const resolversArray = fileLoader(
	path.join(__dirname, "../resolvers/*.resolver.ts"),
);

const typeDefs = mergeTypes(typesArray, { all: true });
const resolvers = mergeResolvers(resolversArray);

export default makeExecutableSchema({ typeDefs, resolvers });
