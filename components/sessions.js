import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core'
import styles from './styles/sessions'
import { convertKeysToValues, fieldsAllowUser } from '#/utils'

class SessionsComponent extends Component {

  trateDate = date => {
    const d = new Date((date.seconds * 1e3) || date)
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString()
  }

  sanitizeUser = user => {
    let usr = Object.assign(
      {},
      ...Object.keys(user).filter(key => fieldsAllowUser.includes(key)).map(key => ({ [key]: user[key] }))
    )
    return usr
  }

  isAllow = session => {
    const d = (new Date((session.date.seconds * 1e3) || session.date)).getTime()
    const now = Date.now()
    return now > d && !session.done && !session.active
  }

  render() {
    const { sessions, classes } = this.props

    return (
      <Grid container direction="row" alignItems="center" justify="space-between" spacing={40} style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Grid item lg={12}>
          <Grid container direction="row" alignItems="center" justify="space-between" spacing={16}>
            {
              (sessions.length &&
                sessions.map((session, i) => (
                  <Grid item lg={3} md={4} key={i}>
                    <Paper className={classes.paper}>
                      <Grid container direction="column" alignItems="center" justify="space-between" spacing={8}>
                        <Grid item>
                          <Typography variant="title">Sesion {session.num}</Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body1">{this.trateDate(session.date)}</Typography>
                        </Grid>
                        <Grid item>
                          <Button variant="contained" color="primary" disabled={this.isAllow(session)} onClick={this.props.clickSession(session)}>Entrar</Button>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                ))
              ) ||
              <Grid item lg={12} md={12}>
                <Paper className={classes.paper}>
                  <Grid container direction="column" alignItems="center" justify="center" spacing={8}>
                    <Grid item>
                      <Typography variant="title">No tienes sesiones disponibles</Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            }
          </Grid>
        </Grid>
        {
          (sessions.length && <Grid item lg={12}>
            <Paper elevation={4} className={classes.paper}>
              <Grid container direction="row" alignItems="center" justify="space-between" spacing={8}>
                <Grid item md={4}>
                  <img src={(sessions[0].doctor && sessions[0].doctor.photoURL) || '/static/logo-type.png'} alt="PROGRESSUS" style={{ width: '100%' }} />
                </Grid>
                <Grid item md={8}>
                  <Grid container direction="row" alignItems="center" justify="space-between" spacing={8}>
                    {
                      sessions[0] && sessions[0].doctor
                      && Object.keys(this.sanitizeUser(sessions[0].doctor)).map((key, i) => (
                        <Grid item md={6} key={i}>
                          <Typography variant="body1"><b>{convertKeysToValues(key)}:</b> {sessions[0].doctor[key]}</Typography>
                        </Grid>
                      ))
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>) || ''
        }
      </Grid>
    )
  }
}

SessionsComponent.propTypes = {
  sessions: PropTypes.array,
}
SessionsComponent.defaultProps = {
  clickSession: (...agrs) => console.log(...agrs),
}

export default withStyles(styles, { name: 'SessionsComponent' })(SessionsComponent)