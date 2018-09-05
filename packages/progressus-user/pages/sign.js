import React, { Component } from 'react'
import Sign from '../components/sign'
import { Grid } from '@material-ui/core'

class SignPage extends Component {
  render () {
    return (
      <Grid container alignItems={'center'} style={{width: '100%', height: '100%'}}>
        <Sign />
      </Grid>
    )
  }
}

export default SignPage
