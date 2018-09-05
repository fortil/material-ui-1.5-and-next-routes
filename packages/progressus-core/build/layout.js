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

var _styles = require('@material-ui/core/styles');

var _Drawer = require('@material-ui/core/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _AppBar = require('@material-ui/core/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('@material-ui/core/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _List = require('@material-ui/core/List');

var _List2 = _interopRequireDefault(_List);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Divider = require('@material-ui/core/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _tileData = require('./tileData');

var _layout = require('./styles/layout');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PermanentDrawer extends _react2.default.Component {

  render() {
    const { classes, children } = this.props;

    const drawer = _react2.default.createElement(
      _Drawer2.default,
      {
        variant: 'permanent',
        classes: {
          paper: classes.drawerPaper
        },
        anchor: 'left'
      },
      _react2.default.createElement('div', { className: classes.toolbar }),
      _react2.default.createElement(_Divider2.default, null),
      _react2.default.createElement(
        _List2.default,
        null,
        _tileData.mailFolderListItems
      ),
      _react2.default.createElement(_Divider2.default, null),
      _react2.default.createElement(
        _List2.default,
        null,
        _tileData.otherMailFolderListItems
      )
    );

    return _react2.default.createElement(
      'div',
      { className: classes.root },
      _react2.default.createElement(
        'div',
        { className: classes.appFrame },
        _react2.default.createElement(
          _AppBar2.default,
          {
            position: 'absolute',
            className: (0, _classnames2.default)(classes.appBar, classes[`appBar-${_layout.drawerWidth}`])
          },
          _react2.default.createElement(
            _Toolbar2.default,
            null,
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'title', color: 'inherit', noWrap: true },
              'Permanent drawer'
            )
          )
        ),
        drawer,
        _react2.default.createElement(
          'main',
          { className: classes.content },
          children
        )
      )
    );
  }
}

PermanentDrawer.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node.isRequired
};

exports.default = (0, _styles.withStyles)(_layout.layout)(PermanentDrawer);