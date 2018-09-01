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


class Login extends Component {
  state = {
    showPassword: false,
    password: '',
    user: ''
  }

  handleChange = prop => event => {
    const value = event.target.value
    if (this.props.change) {
      this.props.change({ prop, value })
    }
    this.setState({ [prop]: event.target.value })
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  }

  handleMouseDownPassword = event => {
    event.preventDefault()
  }

  handleSubmit = () => {
    this.props.login({
      user: this.state.user,
      password: this.state.password
    })
  }

  render() {
    const { classes, paper, image } = this.props
    const { elevation, mdImage, mdContent } = paper
    return (
      <Paper className={classes.paper} elevation={elevation}>
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item md={mdImage} className={classes.image}>{image}</Grid>
          <Grid item md={mdContent} className={classes.contentInputs}>
            <Grid container direction="column" alignItems="center" justify="center">
              <Grid item xs={12} className={classes.titleContainer}>
                <Typography variant="title" className={classes.title}>Inicio Sesión</Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="column">
                  <Grid item xs={12} className={classes.inputUserContainer}>
                    <TextField
                      label="Usuario" 
                      className={classNames(classes.margin, classes.textField)}
                      onChange={this.handleChange('user')}
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.inputPasswordContainer}>
                    <FormControl className={classNames(classes.margin, classes.textField)}>
                      <InputLabel htmlFor="password">Contraseña</InputLabel>
                      <Input
                        id="password"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        fullWidth={true}
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
              <Grid item xs={12} className={classes.buttonContainer}>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.handleSubmit}>
                  Ingresar
                </Button>
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
  paper: PropTypes.object,
  login: PropTypes.func.isRequired,
  change: PropTypes.func,
  classes: PropTypes.object.isRequired
}

Login.defaultProps = {
  paper: {
    elevation: 4,
    mdImage: 4,
    mdContent: 8
  },
  login: (...args) => console.log(...args),
  image: <img src={"http://lorempixel.com/400/200"} alt="PROGRESUS" style={{ width: '100%' }} />
}

export default Login