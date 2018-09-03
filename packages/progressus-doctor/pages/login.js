import React, { Component } from 'react'
import Login from '../components/login'
import { Grid } from '@material-ui/core'

class LoginPage extends Component {
  render () {
    return (
      <Grid container alignItems={'center'} style={{width: '100%', height: '100%'}}>
        <Login />
      </Grid>
    )
  }
}

export default LoginPage
