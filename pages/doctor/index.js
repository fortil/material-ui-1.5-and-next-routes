import React, { Component } from 'react'
import LoginComponent from '#/components/login'

class Login extends Component {
  static collection = 'doctor'
  render() {
    return (
      <LoginComponent {...this.props} collection={Login.collection} />
    )
  }
}

export default Login