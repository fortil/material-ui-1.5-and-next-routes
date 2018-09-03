'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _utils = require('./utils');

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormControlLabel = require('@material-ui/core/FormControlLabel');

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _RadioGroup = require('@material-ui/core/RadioGroup');

var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

var _Radio = require('@material-ui/core/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
  @By William Penagos billalpeza@gmail.com
*/
const fields = [{ type: 'text', name: 'name', label: 'Nombres', errorText: '', error: false, value: 'William' }, { type: 'text', name: 'lastName', label: 'Apellidos', errorText: '', error: false, value: 'Penagos' }, { type: 'password', name: 'password', label: 'Contraseña', errorText: '', error: false, value: 'wp0742226' }, { type: 'password', name: 'passwordconfirmed', label: 'Confirmar contraseña', errorText: '', error: false, value: 'wp0742226' },
// { type: 'radio', name: 'type', options: [{ value: 'user', label: 'Consultante' }, { value: 'doctor', label: 'Psicólogo' }], value: '' },
{ type: 'email', name: 'email', label: 'Email', errorText: '', error: false, value: 'billalpeza@gmail.com' }];

class Registry extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = Object.assign({}, ...fields.map(obj => ({ [obj.name]: obj }))), this.handleChange = prop => event => {
      const value = event.target.value;
      if (this.props.change) {
        this.props.change({ prop, value });
      }
      this.setState(state => {
        const error = prop === 'passwordconfirmed' ? (0, _utils.validation)('confirm', value, state.password.value) : (0, _utils.validation)(state[prop].type, value);
        return {
          [prop]: Object.assign({}, state[prop], {
            value,
            error: error.isError,
            errorText: error.errorText
          })
        };
      });
    }, this.handleSubmit = () => {
      const keys = Object.keys(this.state);
      const values = keys.map(key => ({ [key]: this.state[key].value }));
      this.props.register(Object.assign({}, ...values));
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
            fields.map((field, i) => {
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
                      value: this.state[field.name],
                      onChange: this.handleChange(field.name)
                    },
                    field.options.map((opt, i) => _react2.default.createElement(_FormControlLabel2.default, {
                      key: `option-${i}`,
                      value: opt.value,
                      control: _react2.default.createElement(_Radio2.default, { checked: opt.value === 'user' }),
                      label: opt.label
                    }))
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
                    value: this.state[field.name].value,
                    onChange: this.handleChange(field.name),
                    error: this.state[field.name].error
                    // errorText={this.state[field.name].errorText}
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
}

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
  register: (...args) => console.log(...args),
  image: _react2.default.createElement('img', { src: "http://lorempixel.com/400/200", alt: 'PROGRESUS', style: { width: '100%' } })
};

exports.default = Registry;