import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express'
import mongoose from 'mongoose'
import { typeDefs } from './typeDefs';
import {resolvers} from './resolvers';




async function startApolloServer(typeDefs, resolvers, port=4000) {
    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({app});
    mongoose.connect('mongodb://localhost:27017/', {useNewUrlParser: true, dbName:"FB", user:"reznov", pass:"root"});
    mongoose.connection.once("open", ()=>{ console.log("MongoDB database connection established successfully")});
    app.listen(port, ()=>{
            console.log(`🚀 Server ready at http://localhost:${port+server.graphqlPath}`);
    });
}

startApolloServer(typeDefs, resolvers)