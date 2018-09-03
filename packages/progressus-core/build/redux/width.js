'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _store = require('./store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return (0, _store.initializeStore)(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = (0, _store.initializeStore)(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
}

exports.default = App => {
  return class AppWithRedux extends _react2.default.Component {
    static getInitialProps(appContext) {
      return (0, _asyncToGenerator3.default)(function* () {
        // Get or Create the store with `undefined` as initialState
        // This allows you to set a custom default initialState
        const reduxStore = getOrCreateStore();

        // Provide the store to getInitialProps of pages
        appContext.ctx.reduxStore = reduxStore;

        let appProps = {};
        if (typeof App.getInitialProps === 'function') {
          appProps = yield App.getInitialProps.call(App, appContext);
        }

        return (0, _extends3.default)({}, appProps, {
          initialReduxState: reduxStore.getState()
        });
      })();
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return _react2.default.createElement(App, (0, _extends3.default)({}, this.props, { reduxStore: this.reduxStore }));
    }
  };
};