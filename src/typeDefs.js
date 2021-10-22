import {gql} from "apollo-server-express"
import { GraphQLScalarType, Kind } from 'graphql';


export const typeDefs = gql`
    # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

    # This "Book" type defines the queryable fields for every book in our data source.
    
    #Définition du type scalaire custom :  Date
    scalar Date


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
    getAllComments: Comment
    getAllPosts: Post
    getAllUsers: User
    }
`;

const DateResolver = {
    Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
        parseValue(value) {
            return new Date(value); // value from the client
        },
        serialize(value) {
            return value.getTime(); // value sent to the client
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return new Date(+ast.value); // ast value is always in string format
            }
            return null;
        },
    }),
};
