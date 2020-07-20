import { ApolloServer, ResolverFn } from 'apollo-server';
import {typeDefs} from './schema'


interface User {
  name: string,
  age: number
}

const users = [
  { name: "Jun", age: 30 },
  { name: "Mathew", age: 23 },
  { name: "Jane", age: 20 },
]

interface Context {
  db: string
}

interface ResolverFunc{
  (rootValue: any, args: any, context: Context, info: any ):any 
}

interface Resolvers {
  [name: string] : ResolverFunc
}

// A map of functions which return data for the schema.
const resolvers : {Query: Resolvers}= {
  Query: {
    hello: (rootValue, args, context, info) => {
      context.db = "12345"
      return context.db
    },
    users: (): User[]=>{
      return users
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
