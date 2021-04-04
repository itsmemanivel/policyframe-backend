 
import { makeExecutableSchema } from "graphql-tools";

import typeDefs from "./types/index.js";
import resolvers from "./resolvers/index.js";

const schema = makeExecutableSchema({
  typeDefs ,
  resolvers : (resolvers)
});

export default schema;