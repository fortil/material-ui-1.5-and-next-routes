import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

export default class LoginLayour extends Component {
  render() {
    const { children } = this.props
    return (
      <Grid container direction={'row'} justify={'center'} alignItems={'center'} style={{ minHeight: '100vh' }}>
        <Grid item lg={3} md={2} sm={1} xsUp>
        </Grid>
        <Grid item lg={6} md={8} sm={10}>
          {children}
        </Grid>
        <Grid item lg={3} md={2} sm={1} xsUp>
        </Grid>
      </Grid>
    )
  }
}
