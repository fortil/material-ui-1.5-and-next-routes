'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.functions = exports.messaging = exports.firestore = exports.auth = undefined;

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const config = {
  apiKey: 'AIzaSyCJpChwuiDsgdwGAXLduaqOsqZgC-76-IU',
  authDomain: 'progressus-dev.firebaseapp.com',
  databaseURL: 'https://progressus-dev.firebaseio.com',
  projectId: 'progressus-dev',
  storageBucket: 'progressus-dev.appspot.com',
  messagingSenderId: '657732417625'
};
if (_firebase2.default.apps.length === 0) {
  _firebase2.default.initializeApp(config);
}
const fs = _firebase2.default.firestore();
const settings = { timestampsInSnapshots: true };
fs.settings(settings);

const auth = exports.auth = _firebase2.default.auth;
const firestore = exports.firestore = fs;
const messaging = exports.messaging = _firebase2.default.messaging;
const functions = exports.functions = _firebase2.default.functions;