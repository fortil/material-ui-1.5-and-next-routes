/* 
  @By William Penagos billalpeza@gmail.com
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import MaskedInput from 'react-text-mask'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import { validation } from '#/utils'
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core'
import styles from './styles/sign'
import Link from 'next/link'

const fields = [
  { md: 12, type: 'text', name: 'name', label: 'Nombres', error: false, value: 'William', validate: [] },
  { md: 12, type: 'text', name: 'lastname', label: 'Apellidos', error: false, value: 'Penagos', validate: [] },
  { md: 12, type: 'email', name: 'email', label: 'Email', error: false, value: 'billalpeza@gmail.com', validate: [] },
  { md: 12, type: 'phone', name: 'phone', label: 'Número de celular', error: false, value: '573185213907', validate: [] },
  { md: 6, type: 'date', name: 'birthDate', label: 'Fecha de Nacimiento', error: false, value: '', validate: [] },
  { md: 6, type: 'select', name: 'gender', label: 'Genero', error: false, value: 'Femenino', choices: [{ name: 'Femenino', label: 'Femenino' }, { name: 'Masculino', label: 'Masculino' }], validate: [] },
  { md: 6, type: 'text', name: 'country', label: 'País', error: false, value: 'Colombia', validate: [] },
  { md: 6, type: 'text', name: 'city', label: 'Ciudad', error: false, value: 'Cali', validate: [] },
  { md: 6, type: 'select', name: 'idType', label: 'Tipo de identificación', error: false, value: 'CC', choices: [{ name: 'CC', label: 'Cédula de ciudadanía' }, { name: 'CE', label: 'Cédula de extrajería' }], validate: [] },
  { md: 6, type: 'text', name: 'idNumber', label: 'Número de identificación', error: false, value: '1107052306', validate: [] },
  { md: 6, type: 'text', name: 'ocupy', label: 'Ocupación', error: false, value: 'Ingeniero de Sistemas', validate: [] },
  { md: 6, type: 'select', name: 'heLivesWith', label: 'Con quién vive', error: false, value: 'Solo', choices: [{ name: 'Solo', label: 'Solo' }, { name: 'Familiares', label: 'Familiares' }], validate: [] },
  { md: 12, type: 'text', name: 'direction', label: 'Dirección', error: false, value: 'Carrera 41 C # 55 B 44', validate: [] },
  { md: 12, type: 'phone', name: 'cellphoneEmergency', label: 'Número de celular contacto de emergencia', error: false, value: '573185213907', validate: [] },
  { md: 12, type: 'select', name: 'educationLevel', label: 'Nivel educativo', error: false, value: 'Postgrado', choices: [{ name: 'Primaria', label: 'Primaria' }, { name: 'Secundaria', label: 'Secundaria' }, { name: 'Pregrado', label: 'Pregrado' }, { name: 'Postgrado', label: 'Postgrado' }], validate: [] },
  { md: 12, type: 'text', name: 'eps', label: 'Cuál es tu EPS/Seguro Social', error: false, value: 'SURA', validate: [] },
]

class RegistryComponent extends Component {
  constructor(props) {
    super(props)

    this.state = Object.assign(
      ...fields.map(field => ({ [field.name]: Object.assign(field, { value: props[field.name] || field.value }) }))
    )
  }

  validateError = (field, value) => {
    if (field.validate && field.validate.length) {
      return !field.validate.reduce((prev, fn) => prev || fn(value), false)
    } else {
      return !value
    }
  }

  handleChange = prop => ({ target }) => {
    const value = target.value
    const field = this.state[prop]
    this.setState({
      [prop]: Object.assign({}, field, { value, error: validateError(field, value) })
    })
  }

  handleSubmit = () => {
    console.log('holaaaa submit')
  }

  render() {
    const { classes, collection } = this.props

    return (
      <Grid container direction="row" alignItems="center" justify="center">
        <Grid item md={2} lg={3} smUp></Grid>
        <Grid item md={8} lg={6}>
          <Grid container direction="row" alignItems="center" justify="center" spacing={8}>
            <Grid item md={12} className={classes.button}>
              <Typography variant="title" >Mi Perfil</Typography>
            </Grid>
            {
              fields.map((field, i) => {
                let input = ''
                switch (field.type) {
                  case 'date':
                    input = <FormControl className={classes.formControl}><TextField
                      id={field.label}
                      label={field.label}
                      onChange={this.handleChange(field.name)}
                      type="date"
                      value={this.state[field.name].value}
                      // className={classNames(classes.margin, classes.textField)}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    /></FormControl>
                    break;
                  case 'text':
                    input = <FormControl className={classes.formControl}><TextField
                      label={field.label}
                      // className={classNames(classes.margin, classes.textField)}
                      onChange={this.handleChange(field.name)}
                      value={this.state[field.name].value}
                      fullWidth={true}
                    /></FormControl>
                    break;
                  case 'phone':
                    input = <FormControl className={classes.formControl}>
                      <InputLabel htmlFor={field.name}>{field.label}</InputLabel>
                      <Input
                        value={this.state[field.name].value}
                        onChange={this.handleChange(field.name)}
                        id={field.name}
                        inputComponent={TextMaskCustom}
                      />
                    </FormControl>
                    break;
                  case 'select':
                    input = <FormControl className={classes.formControl}>
                      <InputLabel htmlFor={field.name}>{field.label}</InputLabel>
                      <Select
                        value={this.state[field.name].value}
                        onChange={this.handleChange(field.name)}
                        inputProps={{
                          name: field.name,
                          id: field.name,
                        }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {field.choices.map((choice, i) => {
                          return (
                            <MenuItem key={i} value={choice.name} selected={choice.name === field.value}>{choice.label}</MenuItem>
                          )
                        })}
                      </Select>
                    </FormControl>
                    break;

                  default:
                    break;
                }
                return <Grid item md={field.md} key={i}>{input}</Grid>
              })
            }
            <Grid item md={12} className={classes.button}>
              <Button variant="contained" color="primary"  onClick={this.handleSubmit}>
                Registrar
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={2} lg={3} smUp></Grid>
      </Grid>
    )
  }
}

RegistryComponent.propTypes = {
  image: PropTypes.node,
  register: PropTypes.func,
  change: PropTypes.func,
  classes: PropTypes.object.isRequired,
  collection: PropTypes.string.isRequired
}

RegistryComponent.defaultProps = {
  register: (...args) => console.log(...args),
  image: <img src={'/static/logo-type.png'} alt="PROGRESUS" style={{ width: '100%' }} />
}

function TextMaskCustom(props) {
  const { inputRef, ...other } = props

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={['(', '+', /\d/, /\d/, ')', '(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  )
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
}

export default withStyles(styles, { name: 'RegistryComponentStyle' })(RegistryComponent)
