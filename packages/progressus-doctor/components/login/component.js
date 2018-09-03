import LoginCoreComponent from 'progressus-core/build/login'
import { Component } from 'react'
import { Grid, withStyles } from '@material-ui/core'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const loginStyles = theme => ({
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
})

const Login = withStyles(loginStyles)(LoginCoreComponent)

class LoginComponent extends Component {
  state = {}
  render() {
    const { classes, loginFn } = this.props

    return <Grid 
    container 
    className={classnames(classes.root, classes.fullScreen)} 
    spacing={16}
    justify="center"
    alignItems="center"
    >
      <Grid item xs={6}>
        <Login
          login={loginFn}
          image={<img src={"https://avatars2.githubusercontent.com/u/6068654?v=4"} alt="PROGRESUS" style={{ width: '100%' }} />}
        ></Login>
      </Grid>
    </Grid>
  }
}

const stylesComponent = () => ({
  root: {
    flexGrow: 1,
  },
  fullScreen: {
    width: '100%',
    height: '100%',
  }
})

LoginComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  loginFn: PropTypes.func.isRequired
}

export default withStyles(stylesComponent)(LoginComponent)