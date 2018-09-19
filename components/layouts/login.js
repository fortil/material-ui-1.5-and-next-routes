import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core'
import Loading from './loading'
import { layout as styles } from '#/components/styles/layout'
import { connect } from 'react-redux'

class LoginLayout extends Component {
  state = { showLoading: false }

  componentWillReceiveProps({ showLoading }) {
    if (showLoading === false || showLoading === true) {
      this.setState({ showLoading })
    }
  }

  render() {
    const { children, classes } = this.props

    return (
      <Grid container direction={'row'} justify={'center'} alignItems={'center'} style={{ minHeight: '100vh' }}>
        <Grid item lg={3} md={2} sm={1} xsUp>
        </Grid>
        <Grid item lg={6} md={8} sm={10}>
          {children}
          {this.state.showLoading ? <div className={classes.spinner} ><Loading /></div> : ''}
        </Grid>
        <Grid item lg={3} md={2} sm={1} xsUp>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = ({LOADING = { show: false }}) => ({
  showLoading: LOADING.show
})

export default connect(mapStateToProps)(withStyles(styles, { name: 'LoginLayout' })(LoginLayout))
