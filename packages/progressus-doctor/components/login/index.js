import LoginCoreComponent from 'progressus-core/build/login'
import { Component } from 'react'
import { Grid, withStyles } from '@material-ui/core'
import classnames from 'classnames'

const styles = theme => ({
  root: {
    flexGrow: 1,
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
  // paper: {
  //   height: 140,
  //   width: 100,
  // },
  fullScreen: {
    width: '100%',
    height: '100%',
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
})

const Login = withStyles(styles)(LoginCoreComponent)

class LoginComponent extends Component {
  state = {}
  render() {
    const { classes } = this.props

    return <Grid 
    container 
    className={classnames(classes.root, classes.fullScreen)} 
    spacing={16}
    justify="center"
    alignItems="center"
    >
      <Grid item xs={6}>
        <Login
          login={console.log}
          image={<img src={"https://avatars2.githubusercontent.com/u/6068654?v=4"} alt="PROGRESUS" style={{ width: '100%' }} />}
        ></Login>
      </Grid>
    </Grid>
  }
}

export default withStyles(styles)(LoginComponent)