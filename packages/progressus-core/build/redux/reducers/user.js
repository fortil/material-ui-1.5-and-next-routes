'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _states = require('../states');

var _actionsType = require('../actionsType');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (state = _states.USER, { type, user, token }) => {
  switch (type) {
    case _actionsType.SET_USER:
      return (0, _extends3.default)({}, state, {
        token,
        user,
        fetching: true
      });
    default:
      return state;
  }
};