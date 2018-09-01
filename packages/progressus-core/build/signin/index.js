'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _utils = require('../utils');

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormControlLabel = require('@material-ui/core/FormControlLabel');

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _RadioGroup = require('@material-ui/core/RadioGroup');

var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

var _Radio = require('@material-ui/core/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 @By William Penagos billalpeza@gmail.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var fields = [{ type: 'text', name: 'name', label: 'Nombres', errorText: '', error: false, value: '' }, { type: 'text', name: 'lastname', label: 'Apellidos', errorText: '', error: false, value: '' }, { type: 'password', name: 'password', label: 'Contraseña', errorText: '', error: false, value: '' }, { type: 'password', name: 'passwordconfirmed', label: 'Confirmar contraseña', errorText: '', error: false, value: '' }, { type: 'radio', name: 'type', options: [{ value: 'user', label: 'Consultante' }, { value: 'doctor', label: 'Psicólogo' }], value: '' }, { type: 'email', name: 'email', label: 'Email', errorText: '', error: false, value: '' }];

var Registry = function (_Component) {
  _inherits(Registry, _Component);

  function Registry() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Registry);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Registry.__proto__ || Object.getPrototypeOf(Registry)).call.apply(_ref, [this].concat(args))), _this), _this.state = Object.assign.apply(Object, [{}].concat(_toConsumableArray(fields.map(function (obj) {
      return _defineProperty({}, obj.name, obj);
    })))), _this.handleChange = function (prop) {
      return function (event) {
        var value = event.target.value;
        if (_this.props.change) {
          _this.props.change({ prop: prop, value: value });
        }
        _this.setState(function (state) {
          var error = prop === 'passwordconfirmed' ? (0, _utils.validation)('confirm', value, state.password.value) : (0, _utils.validation)(state[prop].type, value);
          return _defineProperty({}, prop, Object.assign({}, state[prop], {
            value: value,
            error: error.isError,
            errorText: error.errorText
          }));
        });
      };
    }, _this.handleSubmit = function () {
      var keys = Object.keys(_this.state);
      var values = keys.map(function (key) {
        return _defineProperty({}, key, _this.state[key].value);
      });
      _this.props.register(values);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Registry, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

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
                  'Crea tu cuenta'
                )
              ),
              fields.map(function (field, i) {
                if (field.type === 'radio') {
                  return _react2.default.createElement(
                    _FormControl2.default,
                    { key: i, component: 'fieldset' },
                    _react2.default.createElement(
                      _RadioGroup2.default,
                      {
                        row: true,
                        name: field.name,
                        id: field.name,
                        'aria-label': field.name,
                        value: _this2.state[field.name],
                        onChange: _this2.handleChange(field.name)
                      },
                      field.options.map(function (opt, i) {
                        return _react2.default.createElement(_FormControlLabel2.default, {
                          key: 'option-' + i,
                          value: opt.value,
                          control: _react2.default.createElement(_Radio2.default, { checked: opt.value === 'user' }),
                          label: opt.label
                        });
                      })
                    )
                  );
                } else {
                  return _react2.default.createElement(
                    _Grid2.default,
                    { key: i, item: true, xs: 12, className: classes.inputContainer },
                    _react2.default.createElement(_TextField2.default, {
                      type: field.type,
                      label: field.label,
                      id: field.name,
                      className: classes.input,
                      onChange: _this2.handleChange(field.name),
                      errorText: _this2.state[field.name].errorText
                    })
                  );
                }
              }),
              _react2.default.createElement(
                _Grid2.default,
                { item: true, xs: 12, className: classes.buttonContainer },
                _react2.default.createElement(
                  _Button2.default,
                  { id: 'register', variant: 'contained', color: 'primary', className: classes.button, onClick: this.handleSubmit },
                  'Registrar'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Registry;
}(_react.Component);

Registry.propTypes = {
  image: _propTypes2.default.node.isRequired,
  paper: _propTypes2.default.object,
  register: _propTypes2.default.func.isRequired,
  change: _propTypes2.default.func,
  classes: _propTypes2.default.object.isRequired
};

Registry.defaultProps = {
  paper: {
    elevation: 4,
    mdImage: 4,
    mdContent: 8
  },
  register: function register() {
    var _console;

    return (_console = console).log.apply(_console, arguments);
  },
  image: _react2.default.createElement('img', { src: "http://lorempixel.com/400/200", alt: 'PROGRESUS', style: { width: '100%' } })
};

exports.default = Registry;
