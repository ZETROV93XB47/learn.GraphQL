"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.environment = exports.PORT = void 0;
const PORT = 27017;
exports.PORT = PORT;
const environment = {
  development: {
    serverURL: `http://localhost:${PORT}/`,
    dbString: 'mongodb://reznov:root@localhost:27017/FB'
  },
  production: {
    serverURL: `http://localhost:${PORT}/`,
    dbString: 'mongodb://localhost:27017/graphqlTutorial-prod'
  }
};
exports.environment = environment;