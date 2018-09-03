import React, { Component } from 'react'
import Registry from '../components/registry'
import { Grid } from '@material-ui/core'

class RegistryPage extends Component {
  render () {
    return (
      <Grid container alignItems={'center'} style={{width: '100%', height: '100%'}}>
        <Registry />
      </Grid>
    )
  }
}

export default RegistryPage
