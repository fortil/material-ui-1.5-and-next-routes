'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.otherMailFolderListItems = exports.mailFolderListItems = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ListItem = require('@material-ui/core/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemIcon = require('@material-ui/core/ListItemIcon');

var _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);

var _ListItemText = require('@material-ui/core/ListItemText');

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _MoveToInbox = require('@material-ui/icons/MoveToInbox');

var _MoveToInbox2 = _interopRequireDefault(_MoveToInbox);

var _Drafts = require('@material-ui/icons/Drafts');

var _Drafts2 = _interopRequireDefault(_Drafts);

var _Star = require('@material-ui/icons/Star');

var _Star2 = _interopRequireDefault(_Star);

var _Send = require('@material-ui/icons/Send');

var _Send2 = _interopRequireDefault(_Send);

var _Mail = require('@material-ui/icons/Mail');

var _Mail2 = _interopRequireDefault(_Mail);

var _Delete = require('@material-ui/icons/Delete');

var _Delete2 = _interopRequireDefault(_Delete);

var _Report = require('@material-ui/icons/Report');

var _Report2 = _interopRequireDefault(_Report);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mailFolderListItems = exports.mailFolderListItems = _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    _ListItem2.default,
    { button: true },
    _react2.default.createElement(
      _ListItemIcon2.default,
      null,
      _react2.default.createElement(_MoveToInbox2.default, null)
    ),
    _react2.default.createElement(_ListItemText2.default, { primary: 'Inbox' })
  ),
  _react2.default.createElement(
    _ListItem2.default,
    { button: true },
    _react2.default.createElement(
      _ListItemIcon2.default,
      null,
      _react2.default.createElement(_Star2.default, null)
    ),
    _react2.default.createElement(_ListItemText2.default, { primary: 'Starred' })
  ),
  _react2.default.createElement(
    _ListItem2.default,
    { button: true },
    _react2.default.createElement(
      _ListItemIcon2.default,
      null,
      _react2.default.createElement(_Send2.default, null)
    ),
    _react2.default.createElement(_ListItemText2.default, { primary: 'Send mail' })
  ),
  _react2.default.createElement(
    _ListItem2.default,
    { button: true },
    _react2.default.createElement(
      _ListItemIcon2.default,
      null,
      _react2.default.createElement(_Drafts2.default, null)
    ),
    _react2.default.createElement(_ListItemText2.default, { primary: 'Drafts' })
  )
);

const otherMailFolderListItems = exports.otherMailFolderListItems = _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    _ListItem2.default,
    { button: true },
    _react2.default.createElement(
      _ListItemIcon2.default,
      null,
      _react2.default.createElement(_Mail2.default, null)
    ),
    _react2.default.createElement(_ListItemText2.default, { primary: 'All mail' })
  ),
  _react2.default.createElement(
    _ListItem2.default,
    { button: true },
    _react2.default.createElement(
      _ListItemIcon2.default,
      null,
      _react2.default.createElement(_Delete2.default, null)
    ),
    _react2.default.createElement(_ListItemText2.default, { primary: 'Trash' })
  ),
  _react2.default.createElement(
    _ListItem2.default,
    { button: true },
    _react2.default.createElement(
      _ListItemIcon2.default,
      null,
      _react2.default.createElement(_Report2.default, null)
    ),
    _react2.default.createElement(_ListItemText2.default, { primary: 'Spam' })
  )
);