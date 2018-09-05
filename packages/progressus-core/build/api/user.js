'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataUser = undefined;
exports.checkIfUserIsAuthenticated = checkIfUserIsAuthenticated;
exports.saveUserDB = saveUserDB;
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

const dataUser = exports.dataUser = ['address', 'lastSession', 'name', 'birthDate', 'emailVerified', 'cellphoneEmergency', 'comments', 'createdAt', 'educationLevel', 'email', 'eps', 'gender', 'heLivesWith', 'idNumber', 'idType', 'uid', 'photoURL', 'complete', 'lastname'];

function checkIfUserIsAuthenticated() {
  const user = (0, _firebase.auth)().currentUser;
  console.log(user, 'user');
  return true;
}

function saveUserDB(user) {
  return _db2.default.set('user', user);
}

function userSanitize(user) {
  return Object.assign({}, ...dataUser.filter(key => user.hasOwnProperty(key)).map(data => ({ [data]: user[data] })));
}

function registerUserApi(usr, collection) {
  return dispatch => {
    const user = userSanitize(usr);
    return _firebase.firestore.collection(collection).doc(usr.uid).set(user).then(() => {
      dispatch((0, _actions.setUser)({ user, token: '' }));
      return saveUserDB({ user, token: '' });
    });
  };
}

function getUserApi(collection) {
  return dispatch => {
    _db2.default.get('user').then(({ user: userLocal, token }) => {
      if (userLocal) {
        if (userLocal.lastSession) {
          userLocal.lastSession = new Date(user.lastSession).toLocaleString();
        }
        dispatch((0, _actions.setUser)({ user: userLocal }));

        _firebase.firestore.collection(collection).doc(userLocal.uid).get().then(snap => snap.data()).then(userDB => {
          const userGot = userSanitize(userDB);
          if (!(0, _utils.isEquivalent)(userGot, user)) {
            dispatch((0, _actions.setUser)({ user: userGot }));
            return saveUserDB({ user, token });
          } else {
            return Promise.resolve(userGot);
          }
        });
      }
    });
  };
}

function loginApi(usr, collection) {
  return dispatch => {
    const user = Object.assign({ lastSession: (0, _utils.dateUtc)() }, userSanitize(usr));
    return _firebase.firestore.collection(collection).doc(usr.uid).get().then(snap => snap.data()).then(u => {
      if (u && u.hasOwnProperty('complete') && u.complete) {
        return _firebase.firestore.collection(collection).doc(usr.uid).set(user).then(() => {
          dispatch((0, _actions.setUser)({ user, token: usr.refreshToken }));
          return saveUserDB({ user, token: usr.refreshToken });
        }).then(() => '/admin');
      } else if (u) {
        return '/registry';
      } else {
        return '/sign';
      }
    });
  };
}