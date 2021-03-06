export const drawerWidth = 240;

export function layout(theme) {
  return {
    root: {
      flexGrow: 1,
      height: '100%',
    },
    spinner: { position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' },
    appFrame: {
      height: 440,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      height: '100%',
      width: '100%',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    'appBar-left': {
      marginLeft: drawerWidth,
    },
    'appBar-right': {
      marginRight: drawerWidth,
    },
    drawerPaper: {
      position: 'relative',
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      // padding: theme.spacing.unit * 3,
      paddingTop: theme.spacing.unit * 10
    },
  }
}
