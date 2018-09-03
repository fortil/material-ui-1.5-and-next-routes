module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/login/component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_progressus_core_build_login__ = __webpack_require__("progressus-core/build/login");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_progressus_core_build_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_progressus_core_build_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core__ = __webpack_require__("@material-ui/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
var _jsxFileName = "/Users/williampenagos/w/progressus/packages/progressus-doctor/components/login/component.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var loginStyles = function loginStyles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    fullScreen: {
      width: '100%',
      height: '100%'
    },
    paper: {
      padding: theme.spacing.unit * 2,
      height: '100%',
      minWidth: '500px',
      color: theme.palette.text.secondary
    },
    control: {
      padding: theme.spacing.unit * 2
    },
    image: {},
    titleContainer: {},
    title: {},
    inputUserContainer: {},
    inputUser: {},
    inputPasswordContainer: {
      marginBottom: 40
    },
    margin: {
      margin: theme.spacing.unit
    },
    textField: {
      flexBasis: 200
    },
    buttonContainer: {},
    button: {}
  };
};

var Login = Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["withStyles"])(loginStyles)(__WEBPACK_IMPORTED_MODULE_1_progressus_core_build_login___default.a);

var LoginComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(LoginComponent, _Component);

  function LoginComponent() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, LoginComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = LoginComponent.__proto__ || Object.getPrototypeOf(LoginComponent)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {}
    }), _temp));
  }

  _createClass(LoginComponent, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          loginFn = _props.loginFn;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["Grid"], {
        container: true,
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.root, classes.fullScreen),
        spacing: 16,
        justify: "center",
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["Grid"], {
        item: true,
        xs: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Login, {
        login: loginFn,
        image: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          src: "https://avatars2.githubusercontent.com/u/6068654?v=4",
          alt: "PROGRESUS",
          style: {
            width: '100%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      })));
    }
  }]);

  return LoginComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var stylesComponent = function stylesComponent() {
  return {
    root: {
      flexGrow: 1
    },
    fullScreen: {
      width: '100%',
      height: '100%'
    }
  };
};

LoginComponent.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object.isRequired,
  loginFn: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["withStyles"])(stylesComponent)(LoginComponent));

/***/ }),

/***/ "./components/login/container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__("./components/login/component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_progressus_core_build_lib_firebase__ = __webpack_require__("progressus-core/build/lib/firebase");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_progressus_core_build_lib_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_progressus_core_build_lib_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_progressus_core_build_api_user__ = __webpack_require__("progressus-core/build/api/user");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_progressus_core_build_api_user___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_progressus_core_build_api_user__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert__ = __webpack_require__("sweetalert");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_router__);
var _jsxFileName = "/Users/williampenagos/w/progressus/packages/progressus-doctor/components/login/container.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var Container =
/*#__PURE__*/
function (_Component) {
  _inherits(Container, _Component);

  function Container() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Container);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Container.__proto__ || Object.getPrototypeOf(Container)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "login", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref2) {
        var user = _ref2.user,
            password = _ref2.password;

        if (user && password) {
          Object(__WEBPACK_IMPORTED_MODULE_2_progressus_core_build_lib_firebase__["auth"])().signInWithEmailAndPassword(user, password).then(function (_ref3) {
            var user = _ref3.user;

            if (user && user.emailVerified) {
              return user;
            } else {
              return true;
            }
          }).then(function (usr) {
            if (_typeof(usr) === 'object') {
              return _this.props.login(usr);
            } else {
              var _user = Object(__WEBPACK_IMPORTED_MODULE_2_progressus_core_build_lib_firebase__["auth"])().currentUser;
              return _user.sendEmailVerification();
            }
          }).then(function (resp) {
            if (!resp) {
              return __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()('Verifica el correo', 'Para poder iniciar sesión debe verificar su correo, revisa tu bandeja de entrada o en spam', 'warning');
            } else {
              __WEBPACK_IMPORTED_MODULE_7_next_router___default.a.push({
                pathname: resp
              });
            }
          }).catch(function (error) {
            console.log(error);

            if (error && error.code && error.message) {
              __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()(error.code, error.message, 'warning');
            } else {
              __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()('Hubo un error', JSON.stringify(error), 'warning');
            }
          });
        } else {
          __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()('Falta un campo', 'El usuario y la contraseña son obligatorios', 'warning');
        }
      }
    }), _temp));
  }

  _createClass(Container, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__component__["a" /* default */], {
        loginFn: this.login,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      });
    }
  }]);

  return Container;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    login: function login(user) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_3_progressus_core_build_api_user__["loginApi"])(user));
    }
  };
};

var mapStateToProps = function mapStateToProps() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    user: USER_STATE_INITIAL
  };
  return {
    user: state.user.user
  };
};

Container.propTypes = {
  user: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object.isRequired,
  login: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Container));

/***/ }),

/***/ "./components/login/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__container__ = __webpack_require__("./components/login/container.js");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__container__["a" /* default */]);

/***/ }),

/***/ "./pages/login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login__ = __webpack_require__("./components/login/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core__ = __webpack_require__("@material-ui/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__);
var _jsxFileName = "/Users/williampenagos/w/progressus/packages/progressus-doctor/pages/login.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var LoginPage =
/*#__PURE__*/
function (_Component) {
  _inherits(LoginPage, _Component);

  function LoginPage() {
    _classCallCheck(this, LoginPage);

    return _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).apply(this, arguments));
  }

  _createClass(LoginPage, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["Grid"], {
        container: true,
        alignItems: 'center',
        style: {
          width: '100%',
          height: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_login__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }));
    }
  }]);

  return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LoginPage);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/login.js");


/***/ }),

/***/ "@material-ui/core":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "progressus-core/build/api/user":
/***/ (function(module, exports) {

module.exports = require("progressus-core/build/api/user");

/***/ }),

/***/ "progressus-core/build/lib/firebase":
/***/ (function(module, exports) {

module.exports = require("progressus-core/build/lib/firebase");

/***/ }),

/***/ "progressus-core/build/login":
/***/ (function(module, exports) {

module.exports = require("progressus-core/build/login");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "sweetalert":
/***/ (function(module, exports) {

module.exports = require("sweetalert");

/***/ })

/******/ });
//# sourceMappingURL=login.js.map