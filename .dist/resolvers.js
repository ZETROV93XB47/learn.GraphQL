"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = void 0;

var _Users = require("./models/Users");

var _Posts = require("./models/Posts");

var _Comments = require("./models/Comments");

const books = [{
  title: 'The Awakening',
  author: 'Kate Chopin'
}, {
  title: 'City of Glass',
  author: 'Paul Auster'
}];
const resolvers = {
  Query: {
    hello: () => "Hello Guys",
    getAllComments: () => {},
    getAllUsers: () => _Users.Users.find()
    /*{
    Users.find({}, function(err, docs){
    console.log(docs);
    return docs;
    });
    }*/
    ,
    getAllPosts: () => {}
  }
};
exports.resolvers = resolvers;