"use strict";

var _apolloServerExpress = require("apollo-server-express");

var _graphql = require("graphql");

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _typeDefs = require("./typeDefs");

var _resolvers = require("./resolvers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var {
  graphqlHTTP
} = require('express-graphql');

var {
  buildSchema
} = require('graphql');

const DateResolver = {
  Date: new _graphql.GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',

    parseValue(value) {
      return new Date(value); // value from the client
    },

    serialize(value) {
      return value.getTime(); // value sent to the client
    },

    parseLiteral(ast) {
      if (ast.kind === _graphql.Kind.INT) {
        return new Date(+ast.value); // ast value is always in string format
      }

      return null;
    }

  })
};
var root = {
  hello: () => {
    return 'Hello world!';
  }
};

async function startApolloServer(typeDefs, resolvers, port = 4000) {
  const app = (0, _express.default)();
  app.use('/graphql', graphqlHTTP({
    schema: typeDefs,
    rootValue: root,
    graphiql: true
  }));
  const server = new _apolloServerExpress.ApolloServer({
    typeDefs,
    resolvers
  });
  await server.start();
  server.applyMiddleware({
    app
  });

  _mongoose.default.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    dbName: "FB",
    user: "reznov",
    pass: "root"
  });

  _mongoose.default.connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
  });

  app.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port + server.graphqlPath}`);
  });
}

startApolloServer(_typeDefs.typeDefs, _resolvers.resolvers);