import React, { Component } from 'react'
import Login from '../components/login'
import { Grid } from '@material-ui/core';

class LoginPage extends Component {
  render () {
    return (
      <Grid container alignItems={'center'} style={{width: '100%', height: '100%'}}>
        <Login />
      </Grid>
    )
  }
}

export default LoginPage
/* 
const styles = theme => ({
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  image: {},
  titleContainer: {},
  title: {},
  inputUserContainer: {},
  inputUser: {},
  inputPasswordContainer: {},
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
  buttonContainer: {},
  button: {}
}) */