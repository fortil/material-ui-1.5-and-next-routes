'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataUser = undefined;
exports.userSanitize = userSanitize;
exports.registerUserApi = registerUserApi;
exports.getUserApi = getUserApi;
exports.loginApi = loginApi;

var _firebase = require('../lib/firebase');

var _actions = require('../redux/actions');

var _db = require('../lib/db');

var _db2 = _interopRequireDefault(_db);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dataUser = exports.dataUser = ['address', 'lastSession', 'name', 'birthDate', 'emailVerified', 'cellphoneEmergency', 'comments', 'createdAt', 'educationLevel', 'email', 'eps', 'gender', 'heLivesWith', 'idNumber', 'idType', 'type', 'uid', 'photoURL', 'complete', 'lastName'];

function userSanitize(user) {
  return Object.assign({}, ...dataUser.filter(key => user.hasOwnProperty(key)).map(data => ({ [data]: user[data] })));
}

function registerUserApi(usr) {
  return dispatch => {
    const user = userSanitize(usr);
    return _firebase.firestore.collection(`users`).doc(usr.uid).set(user).then(() => {
      dispatch((0, _actions.setUser)({ user, token: '' }));
      return _db2.default.set('user', { user, token: '' });
    });
  };
}

function getUserApi() {
  return dispatch => {
    _db2.default.get('user').then(user => {
      if (user) {
        if (user.lastSession) {
          user.lastSession = new Date(user.lastSession).toLocaleString();
        }
        dispatch((0, _actions.setUser)(user));
      }
    });
  };
}

function loginApi(usr) {
  return dispatch => {
    const user = Object.assign({ lastSession: (0, _utils.dateUtc)() }, userSanitize(usr));
    return _firebase.firestore.collection(`users`).doc(usr.uid).get().then(snap => snap.data()).then(u => {
      if (u.hasOwnProperty('complete') && u.complete) {
        return _firebase.firestore.collection(`users`).doc(usr.uid).set(user).then(() => {
          dispatch((0, _actions.setUser)({ user, token: usr.refreshToken }));
          return _db2.default.set('user', { user, token: usr.refreshToken });
        }).then(() => '/admin');
      } else {
        return '/registry';
      }
    });
  };
}