"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Users = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CommentsSchema = new _mongoose.default.Schema({
  id: Number,
  author: Object,
  content: String,
  createdAt: Date,
  post: Object
}, {
  collection: 'Comments'
});

const Users = _mongoose.default.model('Comments', CommentsSchema);

exports.Users = Users;