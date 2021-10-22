"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

const dateScalar = new _graphql.GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',

  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },

  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },

  parseLiteral(ast) {
    if (ast.kind === _graphql.Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }

    return null; // Invalid hard-coded value (not an integer)
  }

});
var _default = dateScalar;
exports.default = _default;