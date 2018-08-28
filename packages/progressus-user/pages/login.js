import React, { Component } from 'react'
import Login from 'progressus-core/login'

class Login extends Component {
  render () {
    return (
      <div>
        <Login login={console.log} />
      </div>
    )
  }
}

export default Login