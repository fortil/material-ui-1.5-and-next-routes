'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUser = setUser;

var _actionsType = require('./actionsType');

function setUser({ user, token }) {
  return {
    type: _actionsType.SET_USER,
    user,
    token
  };
}