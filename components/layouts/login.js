import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core'
import Loading from './loading'
import { layout as styles } from '#/components/styles/layout'
import { connect } from 'react-redux'
import { getUserAuth } from '#/api/user'

class LoginLayout extends Component {
  state = { showLoading: false }

  componentDidMount() {
    const collection = this.props.router.pathname.replace('/', '').split('/')[0]
    this.props.actions.getUserAuth(collection)
  }

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

const mapDispatchToProps = dispatch => ({ actions: { getUserAuth: collection => dispatch(getUserAuth(collection)) }})

const mapStateToProps = ({LOADING = { show: false }}) => ({
  showLoading: LOADING.show
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { name: 'LoginLayout' })(LoginLayout))
