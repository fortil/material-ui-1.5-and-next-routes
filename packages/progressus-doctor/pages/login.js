import React, { Component } from 'react'
import LoginFnComponent from 'progressus-core/build/login'
const LoginComponent = LoginFnComponent()
class Login extends Component {
  render () {
    return (
      <div>
        <LoginComponent login={console.log} />
      </div>
    )
  }
}

export default Login