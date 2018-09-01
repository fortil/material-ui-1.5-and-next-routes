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
import { validation } from '../utils'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'

const fields = [
  { type: 'text', name: 'name', label: 'Nombres' , errorText: '', error: false, value: '' },
  { type: 'text', name: 'lastname', label: 'Apellidos' , errorText: '', error: false, value: '' },
  { type: 'password', name: 'password', label: 'Contraseña' , errorText: '', error: false, value: '' },
  { type: 'password', name: 'passwordconfirmed', label: 'Confirmar contraseña' , errorText: '', error: false, value: '' },
  { type: 'radio', name: 'type', options: [{ value: 'user', label: 'Consultante' }, { value: 'doctor', label: 'Psicólogo' }], value: '' },
  { type: 'email', name: 'email', label: 'Email' , errorText: '', error: false, value: '' }
]

class Registry extends Component {
  state = Object.assign(
    {},
    ...fields.map(obj => ({ [obj.name]: obj }))
  )

  handleChange = prop => event => {
    const value = event.target.value
    if (this.props.change) {
      this.props.change({ prop, value })
    }
    this.setState(state => {
      const error = prop === 'passwordconfirmed' ?
        validation('confirm', value, state.password.value) :
        validation(state[prop].type, value)
      return {
        [prop]: Object.assign(
          {},
          state[prop],
          {
            value,
            error: error.isError,
            errorText: error.errorText
          }
        )
      }
    })
  }


  handleSubmit = () => {
    const keys = Object.keys(this.state)
    const values = keys.map(key => ({ [key]: this.state[key].value }))
    this.props.register(values)
  }

  render() {
    const { classes, paper, image } = this.props
    const { elevation, mdImage, mdContent } = paper
    return (
      <Paper className={classes.paper} elevation={elevation}>
        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item md={mdImage} className={classes.image}>{image}</Grid>
          <Grid item md={mdContent}>
            <Grid container direction="column" alignItems="center" justify="center">
              <Grid item xs={12} className={classes.titleContainer}>
                <Typography variant="title" className={classes.title}>Crea tu cuenta</Typography>
              </Grid>
              {fields.map((field, i) => {
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
                      onChange={this.handleChange(field.name)}
                      errorText={this.state[field.name].errorText}
                    />
                  </Grid>
                }
              })}
              <Grid item xs={12} className={classes.buttonContainer}>
                <Button id="register" variant="contained" color="primary" className={classes.button} onClick={this.handleSubmit}>
                  Registrar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

Registry.propTypes = {
  image: PropTypes.node.isRequired,
  paper: PropTypes.object,
  register: PropTypes.func.isRequired,
  change: PropTypes.func,
  classes: PropTypes.object.isRequired
}

Registry.defaultProps = {
  paper: {
    elevation: 4,
    mdImage: 4,
    mdContent: 8
  },
  register: (...args) => console.log(...args),
  image: <img src={"http://lorempixel.com/400/200"} alt="PROGRESUS" style={{ width: '100%' }} />
}

export default Registry
