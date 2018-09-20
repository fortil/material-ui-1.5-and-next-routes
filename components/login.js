/* 
  @By William Penagos billalpeza@gmail.com
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core'
import styles from './styles/login'
import Link from 'next/link'

class Login extends Component {
  state = {
    showPassword: false,
    password: { value: 'wp0742226', error: false },
    user: { value: 'billalpeza@gmail.com', error: false }
  }

  handleChange = prop => event => {
    const value = event.target.value
    if (this.props.change) {
      this.props.change({ prop, value })
    }
    this.setState({ [prop]: Object.assign({}, { value: event.target.value }) })
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  }

  handleMouseDownPassword = event => {
    event.preventDefault()
  }

  handleSubmit = () => {
    this.props.login({
      user: this.state.user.value,
      password: this.state.password.value
    })
  }

  render() {
    const { classes, image, collection } = this.props

    return (
      <Paper className={classes.paper} elevation={4}>
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item md={4} xs={12}>{image}</Grid>
          <Grid item md={8} xs={12}>
            <Grid container direction="column" alignItems="center" justify="center" spacing={8}>
              <Grid item xs={12} >
                <Typography variant="title" >Inicio Sesión</Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="column" alignItems="flex-start">
                  <Grid item xs={12} style={{ width: '100%' }}>
                    <TextField
                      label="Usuario"
                      className={classNames(classes.margin, classes.textField)}
                      onChange={this.handleChange('user')}
                      value={this.state.user.value}
                      fullWidth={true}
                      error={this.state.user.error}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      className={classNames(classes.margin, classes.textField)}
                    >
                      <InputLabel htmlFor="password">Contraseña</InputLabel>
                      <Input
                        id="password"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.password.value}
                        onChange={this.handleChange('password')}
                        fullWidth={true}
                        error={this.state.password.error}
                        endAdornment={
                          <InputAdornment position="start">
                            <IconButton
                              aria-label="Toggle password visibility"
                              onClick={this.handleClickShowPassword}
                              onMouseDown={this.handleMouseDownPassword}
                            >
                              {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.handleSubmit}>
                  Ingresar
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Link href={`/${collection}/sign`}><a>Registrate</a></Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

Login.propTypes = {
  image: PropTypes.node.isRequired,
  login: PropTypes.func.isRequired,
  change: PropTypes.func,
  classes: PropTypes.object.isRequired
}

Login.defaultProps = {
  login: (...args) => console.log(...args),
  image: <img src={'/static/logo-type.png'} alt="PROGRESUS" style={{ width: '100%' }} />
}

export default withStyles(styles)(Login)