const { ApolloServer, gql } = require("apollo-server");

// The GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
    users: [User]
  }

  type User {
    name: String
    age: Int
  }

`;

const users = [
  { name: "Jun", age: 30 },
  { name: "Mathew", age: 23 },
  { name: "Jane", age: 20 },
]

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => "world nihao",
    users: () => {
      return users
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
