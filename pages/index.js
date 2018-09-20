import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import Paper from '@material-ui/core/Paper'

export default class Hola extends Component {
  render() {
    return (
      <Grid container direction="row" justify="space-around" spacing={40}>
        <Grid item xs style={{ cursor: 'pointer' }}>
          <Link href={'/doctor'}>
            <Paper style={{ cursor: 'pointer' }}>
              <Grid container direction="column" spacing={16} alignItems="center">
                <Grid item xs={12}>
                  <img src={'/static/doctor.png'} style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12}>
                  Doctor
                </Grid>
              </Grid>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs>
          <Link href={'/consultant'}>
            <Paper style={{ cursor: 'pointer' }}>
              <Grid container direction="column" spacing={16} alignItems="center">
                <Grid item xs={12}>
                  <img src={'/static/consultant.png'} style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12}>
                  Consultant
                </Grid>
              </Grid>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    )
  }
}
