import SignCoreComponent from 'progressus-core/build/signin'
import { Component } from 'react'
import { Grid, withStyles } from '@material-ui/core'
import classnames from 'classnames'
import PropTypes from 'prop-types'

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
        <SignCoreComponent
          {...props}
          image={<img src={"https://avatars2.githubusercontent.com/u/6068654?v=4"} alt="PROGRESUS" style={{ width: '100%' }} />}
        ></SignCoreComponent>
      </Grid>
    </Grid>
  }
}

const styles = () => ({
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

export default withStyles(styles)(SignComponent)