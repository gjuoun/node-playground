import { ApolloServer, ResolverFn } from 'apollo-server';
import { typeDefs } from './schema'
import { GraphQLScalarType, Kind } from 'graphql';


interface User {
  name: string,
  age: number,
  timestamp: number
}

const users = [
  { name: "Jun", age: 30, timestamp: 1595206616528 },
  { name: "Mathew", age: 23, timestamp: 1595206316528 },
  { name: "Jane", age: 20, timestamp: 1595206316528 },
]

interface Context {
  db: string
}

interface ResolverFunc {
  (parent: any, args: any, context: Context, info: any): any
}

interface Resolvers extends Record<string, ResolverFunc> { }


const date = new GraphQLScalarType({
  name: 'Date',
  description: 'Javascript Date object, represented by timestamp',
  serialize(value) {
    return value;
  },
  parseValue(value) {
    let result;
    // Implement custom behavior here by setting the 'result' variable
    return result;
  },
  parseLiteral(ast) {
    switch (ast.kind) {
      case Kind.INT:
        return ast.value.toString()
      case Kind.STRING:
        return ast.value
      default:
        return ""
      // return a literal value, such as 1 or 'static string'
    }
  }
});


// A map of functions which return data for the schema.
const resolvers: { Query: Resolvers, Date: any } = {
  Date: date,
  Query: {
    hello: (rootValue, args, context, info) => {
      context.db = "12345"
      return context.db
    },
    users: (rootValue: User, args: { name?: string }, context, info): User[] => {

      if (args.name) {
        return users.filter((user) => {
          return user.name === args.name
        })
      } else {

        return users
      }
    },
  },

};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
