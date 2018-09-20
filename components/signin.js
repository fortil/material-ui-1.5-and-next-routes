/* 
  @By William Penagos billalpeza@gmail.com
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { validateEmail } from '#/utils'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import { withStyles } from '@material-ui/core'
import styles from './styles/sign'
import Link from 'next/link'
import swl from 'sweetalert'

class SignInComponent extends Component {
  samePwd = to => value => this.state[to].value === value

  fields = [
    { type: 'text', name: 'name', label: 'Nombres', error: false, value: '' },
    { type: 'text', name: 'lastname', label: 'Apellidos', error: false, value: '' },
    { type: 'email', name: 'email', label: 'Email', error: false, value: '', validate: [ validateEmail ] },
    { type: 'password', name: 'password', label: 'Contraseña', error: false, value: '', validate: [ this.samePwd('passwordconfirmed') ] },
    { type: 'password', name: 'passwordconfirmed', label: 'Confirmar contraseña', error: false, value: '', validate: [ this.samePwd('password') ] },
    { type: 'checkbox', name: 'terms', label: 'Términos y condiciones', value: false, error: true },
  ]

  state = Object.assign(
    {},
    ...this.fields.map(obj => ({ [obj.name]: obj }))
  )

  validateError = (field, value) => {
    if (field.validate && field.validate.length) {
      return !field.validate.reduce((prev, fn) => prev || fn(value), false)
    } else {
      return !value
    }
  }

  handleChange = prop => event => {
    const value = event.target.value
    if (this.props.change) {
      this.props.change({ prop, value })
    }

    this.setState(state => {
      return {
        [prop]: Object.assign(
          {},
          state[prop],
          {
            value,
            error: this.validateError(state[prop], value)
          }
        )
      }
    })
  }


  handleSubmit = () => {
    const keys = Object.keys(this.state)
    const errors = []
    const values = keys.map(key => {
      const field = this.state[key]
      if (field.error) {
        errors.push(field.label)
      }
      return { [key]: this.state[key].value }
    })
    if (errors.length) {
      swl('Debe rellenar todos los campos', `Para poder registrarse debe rellenar todos los campos; ${errors.join(', ')}`, 'warning')
    } else {
      this.props.register(Object.assign({}, ...values))
    }
  }

  render() {
    const { classes, paper, image, collection } = this.props
    const { elevation, mdImage, mdContent } = paper

    return (
      <Paper className={classes.paper} elevation={elevation}>
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item md={mdImage} className={classes.image}>{image}</Grid>
          <Grid item md={mdContent}>
            <Grid container direction="column" alignItems="center" justify="center" spacing={8}>
              <Grid item xs={12} className={classes.titleContainer}>
                <Typography variant="title" className={classes.title}>Crea tu cuenta</Typography>
              </Grid>
              {this.fields.map((field, i) => {
                if (field.type === 'radio') {
                  return <FormControl key={i} component="fieldset">
                    <RadioGroup
                      row
                      name={field.name}
                      id={field.name}
                      aria-label={field.name}
                      value={this.state[field.name]}
                      onChange={this.handleChange(field.name)}
                    >
                      {field.options.map((opt, i) => (
                        <FormControlLabel
                          key={`option-${i}`}
                          value={opt.value}
                          control={<Radio checked={opt.value === 'user'} />}
                          label={opt.label}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                } else {
                  return <Grid key={i} item xs={12} className={classes.inputContainer}>
                    <TextField
                      type={field.type}
                      label={field.label}
                      id={field.name}
                      className={classes.input}
                      InputLabelProps={ field.type === 'checkbox' ? {
                        shrink: true
                      } : {} }
                      value={this.state[field.name].value}
                      onChange={this.handleChange(field.name)}
                      error={this.state[field.name].error}
                    // errorText={this.state[field.name].errorText}
                    />
                  </Grid>
                }
              })}
              <Grid item xs={12} className={classes.buttonContainer}>
                <Button id="register" variant="contained" color="primary" className={classes.button} onClick={this.handleSubmit}>
                  Registrar
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Link href={`/${collection}`}><a>Inicia sesión</a></Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

SignInComponent.propTypes = {
  image: PropTypes.node.isRequired,
  paper: PropTypes.object,
  register: PropTypes.func.isRequired,
  change: PropTypes.func,
  classes: PropTypes.object.isRequired
}

SignInComponent.defaultProps = {
  paper: {
    elevation: 4,
    mdImage: 4,
    mdContent: 8
  },
  register: (...args) => console.log(...args),
  image: <img src={'/static/logo-type.png'} alt="PROGRESUS" style={{ width: '100%' }} />
}

export default withStyles(styles, { name: 'SignInComponentStyle' })(SignInComponent)
