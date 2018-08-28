'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('@material-ui/core/styles');

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _Input = require('@material-ui/core/Input');

var _Input2 = _interopRequireDefault(_Input);

var _InputLabel = require('@material-ui/core/InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _InputAdornment = require('@material-ui/core/InputAdornment');

var _InputAdornment2 = _interopRequireDefault(_InputAdornment);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Visibility = require('@material-ui/icons/Visibility');

var _Visibility2 = _interopRequireDefault(_Visibility);

var _VisibilityOff = require('@material-ui/icons/VisibilityOff');

var _VisibilityOff2 = _interopRequireDefault(_VisibilityOff);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 @By William Penagos billalpeza@gmail.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showPassword: false,
      password: '',
      user: ''
    }, _this.handleChange = function (prop) {
      return function (event) {
        var value = event.target.value;
        if (_this.props.change) {
          _this.props.change({ prop: prop, value: value });
        }
        _this.setState(_defineProperty({}, prop, event.target.value));
      };
    }, _this.handleClickShowPassword = function () {
      _this.setState(function (state) {
        return { showPassword: !state.showPassword };
      });
    }, _this.handleMouseDownPassword = function (event) {
      event.preventDefault();
    }, _this.handleSubmit = function () {
      _this.props.login({
        user: _this.state.user,
        password: _this.state.password
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          paper = _props.paper,
          image = _props.image;
      var elevation = paper.elevation,
          mdImage = paper.mdImage,
          mdContent = paper.mdContent;

      return _react2.default.createElement(
        _Paper2.default,
        { className: classes.paper, elevation: elevation },
        _react2.default.createElement(
          _Grid2.default,
          { container: true, direction: 'row', alignItems: 'center', justify: 'center' },
          _react2.default.createElement(
            _Grid2.default,
            { item: true, md: mdImage, className: classes.image },
            image
          ),
          _react2.default.createElement(
            _Grid2.default,
            { item: true, md: mdContent },
            _react2.default.createElement(
              _Grid2.default,
              { container: true, direction: 'column', alignItems: 'center', justify: 'center' },
              _react2.default.createElement(
                _Grid2.default,
                { item: true, xs: 12, className: classes.titleContainer },
                _react2.default.createElement(
                  _Typography2.default,
                  { variant: 'title', className: classes.title },
                  'Inicio Sesi\xF3n'
                )
              ),
              _react2.default.createElement(
                _Grid2.default,
                { item: true, xs: 12, className: classes.inputUserContainer },
                _react2.default.createElement(_TextField2.default, { label: 'Usuario', className: classes.inputUser, onChange: this.handleChange('user') })
              ),
              _react2.default.createElement(
                _Grid2.default,
                { item: true, xs: 12, className: classes.inputPasswordContainer },
                _react2.default.createElement(
                  _FormControl2.default,
                  { className: (0, _classnames2.default)(classes.margin, classes.textField) },
                  _react2.default.createElement(
                    _InputLabel2.default,
                    { htmlFor: 'password' },
                    'Contrase\xF1a'
                  ),
                  _react2.default.createElement(_Input2.default, {
                    id: 'password',
                    type: this.state.showPassword ? 'text' : 'password',
                    value: this.state.password,
                    onChange: this.handleChange('password'),
                    endAdornment: _react2.default.createElement(
                      _InputAdornment2.default,
                      { position: 'start' },
                      _react2.default.createElement(
                        _IconButton2.default,
                        {
                          'aria-label': 'Toggle password visibility',
                          onClick: this.handleClickShowPassword,
                          onMouseDown: this.handleMouseDownPassword
                        },
                        this.state.showPassword ? _react2.default.createElement(_VisibilityOff2.default, null) : _react2.default.createElement(_Visibility2.default, null)
                      )
                    )
                  })
                )
              ),
              _react2.default.createElement(
                _Grid2.default,
                { item: true, xs: 12, className: classes.buttonContainer },
                _react2.default.createElement(
                  _Button2.default,
                  { variant: 'contained', color: 'primary', className: classes.button, onClick: this.handleSubmit },
                  'Ingresar'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react.Component);

Login.propTypes = {
  image: _propTypes2.default.node.isRequired,
  paper: _propTypes2.default.object,
  login: _propTypes2.default.func.isRequired,
  change: _propTypes2.default.func,
  classes: _propTypes2.default.object.isRequired
};

Login.defaultProps = {
  paper: {
    elevation: 4,
    mdImage: 4,
    mdContent: 8
  },
  login: function login() {
    var _console;

    return (_console = console).log.apply(_console, arguments);
  },
  image: _react2.default.createElement('img', { src: "http://lorempixel.com/400/200", alt: 'PROGRESUS', style: { width: '100%' } })
};

var styles = function styles(theme) {
  return {
    paper: {
      height: 140,
      width: 100
    },
    control: {
      padding: theme.spacing.unit * 2
    },
    image: {},
    titleContainer: {},
    title: {},
    inputUserContainer: {},
    inputUser: {},
    inputPasswordContainer: {},
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

exports.default = function () {
  var stls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : styles;
  return (0, _styles.withStyles)(stls)(Login);
};
