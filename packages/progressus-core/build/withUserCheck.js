'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _user = require('./api/user');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const withUserCheck = WrappedComponent => {
  class ComponentWithUserCheck extends _react.Component {
    constructor(...args) {
      var _temp;

      return _temp = super(...args), this.render = () => {
        const _props = this.props,
              { wrappedComponentRef } = _props,
              restProps = (0, _objectWithoutProperties3.default)(_props, ['wrappedComponentRef']);

        return _react2.default.createElement(WrappedComponent, (0, _extends3.default)({}, restProps, { ref: wrappedComponentRef }));
      }, _temp;
    }

  }

  ComponentWithUserCheck.displayName = (0, _recompose.wrapDisplayName)(WrappedComponent, 'withUserCheck');
  ComponentWithUserCheck.WrappedComponent = WrappedComponent;
  ComponentWithUserCheck.propTypes = {
    wrappedComponentRef: _propTypes2.default.func
  };

  ComponentWithUserCheck.getInitialProps = (() => {
    var _ref = (0, _asyncToGenerator3.default)(function* (ctx) {
      const wrappedComponentProps = typeof WrappedComponent.getInitialProps === 'function' ? yield WrappedComponent.getInitialProps(ctx) : {};

      // Pseudo-function which you will have to write yourself.
      // Read about what you can extract from ctx in getInitialProps() here:
      // https://github.com/zeit/next.js#fetching-data-and-component-lifecycle
      // You can redirect via Express'es res.redirect() here if this is a
      // server call (check ctx.req and ctx.res) or with next/router if it
      // is a client-side call.
      const isAuthenticated = (0, _user.checkIfUserIsAuthenticated)(ctx);
      return (0, _extends3.default)({}, wrappedComponentProps, { isAuthenticated });
    });

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  })();

  return (0, _hoistNonReactStatics2.default)(ComponentWithUserCheck, WrappedComponent);
};

exports.default = withUserCheck;