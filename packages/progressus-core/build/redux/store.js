'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeStore = initializeStore;

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _states = require('./states');

var initialStore = _interopRequireWildcard(_states);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import axios from '../lib/axios'

const middlewares = [_reduxThunk2.default];
// const middlewares = [thunkMiddleware.withExtraArgument({ axios })]

if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger').createLogger;
  const logger = createLogger({ collapsed: true });
  middlewares.push(logger);
}

function initializeStore(initialState = initialStore) {
  return (0, _redux.createStore)(_reducers2.default, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(...middlewares)));
}