"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schema = void 0;

var _graphqlTools = require("graphql-tools");

var _apolloServer = require("apollo-server");

const typeDefs = (0, _apolloServer.gql)`
    # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

    # This "Book" type defines the queryable fields for every book in our data source.
    
    #Définition du type scalaire custom :  Date
    scalar Date


    
    type Book {
        title: String
        author: String
    }

    type User {
        id: Int!
        email: String!
        age: Int
        password: String!
        firstName: String!
        lastName: String!  
        gender: String!
        phone: String
        address: String
    }
    
    type Post {
        id: Int
        author: User!
        content: String!
        createdAt: Date!
    }
    
    type Comment {
        id: Int,
        author: User!,
        content: String!
        createdAt: Date!
        post: Post!
    }



    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "books" query returns an array of zero or more Books (defined above).
    type Query {
    hello: String
    books: [Book]
    getAllComments: Comment
    getAllPosts: Post
    getAllUsers: User
    }
`;
const resolvers = {
  Query: {
    books: () => books,
    getAllComments: () => {},
    getAllUsers: () => {},
    getAllPosts: () => {}
  }
};
const schema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs,
  resolvers
});
exports.schema = schema;