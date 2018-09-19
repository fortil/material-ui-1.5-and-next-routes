import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core'
import styles from './styles/sessions'
import { convertKeysToValues } from '#/utils'

class SessionsComponent extends Component {

  render() {
    const { sessions, classes } = this.props
    return (
      <Grid container direction="row" alignItems="center" justify="space-between" spacing={40} style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Grid item lg={12}>
          <Grid container direction="row" alignItems="center" justify="space-between" spacing={16}>
            {
              sessions.map((session, i) => (
                <Grid item lg={3} md={4} key={i}>
                  <Paper className={classes.paper}>
                    <Grid container direction="column" alignItems="center" justify="space-between" spacing={8}>
                      <Grid item>
                        <Typography variant="title">Sesion {i + 1}</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body1">{session.date}</Typography>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" color="primary">Entrar</Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              ))
            }
          </Grid>
        </Grid>
        <Grid item lg={12}>
          <Paper elevation={4} className={classes.paper}>
            <Grid container direction="row" alignItems="center" justify="space-between" spacing={8}>
              <Grid item md={4}>
                <img src={'/static/logo-type.png'} alt="PROGRESSUS" style={{ width: '100%' }} />
              </Grid>
              <Grid item md={8}>
                <Grid container direction="row" alignItems="center" justify="space-between" spacing={8}>
                  {
                    sessions[0] && sessions[0].doctor
                    && Object.keys(sessions[0].doctor).map((key, i) => (
                      <Grid item md={6} key={i}>
                        <Typography variant="body1"><b>{convertKeysToValues(key)}:</b> {sessions[0].doctor[key]}</Typography>
                      </Grid>
                    ))
                  }
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

SessionsComponent.propTypes = {
  sessions: PropTypes.array,
}

export default withStyles(styles, { name: 'SessionsComponent' })(SessionsComponent)