export function login(theme) {
  return {
    root: {
      flexGrow: 1,
    },
    fullScreen: {
      width: '100%',
      height: '100%',
    },
    paper: {
      padding: theme.spacing.unit * 2,
      height: '100%',
      minWidth: '500px',
      color: theme.palette.text.secondary
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
    image: {},
    titleContainer: {},
    title: {},
    inputUserContainer: {
    },
    inputUser: {},
    inputPasswordContainer: {
      marginBottom: 40
    },
    margin: {
      margin: theme.spacing.unit,
    },
    textField: {
      flexBasis: 200,
    },
    buttonContainer: {},
    button: {}
  }
}