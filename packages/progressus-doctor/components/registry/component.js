import SignCoreComponent from 'progressus-core/build/signin'
import { Component } from 'react'
import { Grid, withStyles } from '@material-ui/core'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const signStyles = theme => ({
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
  input: {
    width: '100%'
  },
  inputContainer: {
    width: '60%'
  },
  buttonContainer: {
    marginTop: 20
  },
  button: {}
})

const Sign = withStyles(signStyles)(SignCoreComponent)

class SignComponent extends Component {
  state = {}
  render() {
    const { classes, ...props } = this.props

    return <Grid 
    container 
    className={classnames(classes.root, classes.fullScreen)} 
    spacing={16}
    justify="center"
    alignItems="center"
    >
      <Grid item xs={6}>
        <Sign
          {...props}
          image={<img src={"https://avatars2.githubusercontent.com/u/6068654?v=4"} alt="PROGRESUS" style={{ width: '100%' }} />}
        ></Sign>
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

SignComponent.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(stylesComponent)(SignComponent)