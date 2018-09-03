'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

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

class Login extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      showPassword: false,
      password: 'wp0742226',
      user: 'billalpeza@gmail.com'
    }, this.handleChange = prop => event => {
      const value = event.target.value;
      if (this.props.change) {
        this.props.change({ prop, value });
      }
      this.setState({ [prop]: event.target.value });
    }, this.handleClickShowPassword = () => {
      this.setState(state => ({ showPassword: !state.showPassword }));
    }, this.handleMouseDownPassword = event => {
      event.preventDefault();
    }, this.handleSubmit = () => {
      this.props.login({
        user: this.state.user,
        password: this.state.password
      });
    }, _temp;
  }

  render() {
    const { classes, paper, image } = this.props;
    const { elevation, mdImage, mdContent } = paper;
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
          { item: true, md: mdContent, className: classes.contentInputs },
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
              { item: true, xs: 12 },
              _react2.default.createElement(
                _Grid2.default,
                { container: true, direction: 'column' },
                _react2.default.createElement(
                  _Grid2.default,
                  { item: true, xs: 12, className: classes.inputUserContainer },
                  _react2.default.createElement(_TextField2.default, {
                    label: 'Usuario',
                    className: (0, _classnames2.default)(classes.margin, classes.textField),
                    onChange: this.handleChange('user'),
                    value: this.state.user,
                    fullWidth: true
                  })
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
                      fullWidth: true,
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
                )
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
} /* 
    @By William Penagos billalpeza@gmail.com
  */


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
  login: (...args) => console.log(...args),
  image: _react2.default.createElement('img', { src: "http://lorempixel.com/400/200", alt: 'PROGRESUS', style: { width: '100%' } })
};

exports.default = Login;