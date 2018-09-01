webpackHotUpdate(5,{

/***/ "./components/login/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_progressus_core_build_login__ = __webpack_require__("../progressus-core/build/login/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_progressus_core_build_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_progressus_core_build_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core__ = __webpack_require__("../../node_modules/@material-ui/core/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("../../node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
var _jsxFileName = "/Users/williampenagos/w/progressus/packages/progressus-doctor/components/login/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
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
    // paper: {
    //   height: 140,
    //   width: 100,
    // },
    fullScreen: {
      width: '100%',
      height: '100%'
    },
    image: {},
    titleContainer: {},
    title: {},
    inputUserContainer: {},
    inputUser: {},
    inputPasswordContainer: {
      marginBottom: 200
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

var Login = Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["b" /* withStyles */])(styles)(__WEBPACK_IMPORTED_MODULE_1_progressus_core_build_login___default.a);

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
      var classes = this.props.classes;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["a" /* Grid */], {
        container: true,
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes.root, classes.fullScreen),
        spacing: 16,
        justify: "center",
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["a" /* Grid */], {
        item: true,
        xs: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Login, {
        login: console.log,
        image: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          src: "https://avatars2.githubusercontent.com/u/6068654?v=4",
          alt: "PROGRESUS",
          style: {
            width: '100%'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      })));
    }
  }]);

  return LoginComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["b" /* withStyles */])(styles)(LoginComponent));

/***/ })

})
//# sourceMappingURL=5.c5bad2afaa72b8fe4bc4.hot-update.js.map