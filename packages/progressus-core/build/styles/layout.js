'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layout = layout;
const drawerWidth = exports.drawerWidth = 240;

function layout(theme) {
  return {
    root: {
      flexGrow: 1
    },
    appFrame: {
      height: 440,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      width: '100%'
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    'appBar-left': {
      marginLeft: drawerWidth
    },
    'appBar-right': {
      marginRight: drawerWidth
    },
    drawerPaper: {
      position: 'relative',
      width: drawerWidth
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3
    }
  };
}