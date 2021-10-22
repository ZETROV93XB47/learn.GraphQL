"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Users = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UsersSchema = new _mongoose.default.Schema({
  id: Number,
  email: String,
  age: Number,
  password: String,
  firstName: String,
  lastName: String,
  gender: String,
  phone: String,
  address: String
}, {
  collection: 'Users'
});

const Users = _mongoose.default.model('Users', UsersSchema);

exports.Users = Users;