import ComponentLogin from './component'
import React, { Component } from 'react'
import { auth } from 'progressus-core/build/lib/firebase'
import { loginApi } from 'progressus-core/build/api/user'
import swal from 'sweetalert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Router from 'next/router'

class Container extends Component {
  login = ({user, password}) => {
    if (user && password) {
      auth().signInWithEmailAndPassword(user, password)
      .then(({ user }) => {
        if (user && user.emailVerified) {
          return user
        } else {
          return true
        }
      })
      .then(usr => {
        if (typeof usr === 'object') {
          return this.props.login(usr)
        } else {
          const user = auth().currentUser
          return user.sendEmailVerification()
        }
      })
      .then(resp => {
        if (!resp) {
          return swal('Verifica el correo', 'Para poder iniciar sesión debe verificar su correo, revisa tu bandeja de entrada o en spam', 'warning')
        } else {
          Router.push({ pathname: resp })
        }
      })
      .catch(error => {
        console.log(error);
        if (error && error.code && error.message) {
          swal(error.code, error.message, 'warning')
        } else {
          swal('Hubo un error', JSON.stringify(error), 'warning')
        }
      })
    } else {
      swal('Falta un campo', 'El usuario y la contraseña son obligatorios', 'warning')
    }
  }
  render() {
    return (
      <ComponentLogin loginFn={this.login}></ComponentLogin>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(loginApi(user))
})

const mapStateToProps = (state = { user: USER_STATE_INITIAL }) => ({
  user: state.user.user
})

Container.propTypes = {
  user: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)