import React, { Component } from 'react'
import LoginComponent from '#/components/login'
import { connect } from 'react-redux'
import { USER as INITIAL_STATE_USER, ERROR as INITIAL_STATE_ERROR } from '#/api/redux/states'
import { login, resentPassword, sendEmailVerification } from '#/api/user'
import { removeError } from '#/api/redux/actions'
import Router from 'next/router'
import swal from 'sweetalert'

const collection = 'consultant'

class Login extends Component {
  static collection = collection
  
  componentWillReceiveProps({ user, error }) {
    if (user && Object.keys(user).length) {
      if (!user.emailVerified) {
        swal('Recuerda verficar tu correo, si desseas recibir de nuevo el enlace de verificación da click en reenviar', { buttons: { ok: 'Ok', resent: 'Reenviar'}, icon: 'info' })
        .then(res => res && res === 'resent' ? sendEmailVerification() : false)
        .then(res => res ? swal('Revisa tu correo de confirmación', 'Se envió un correo de confirmación, revisa en tu bandeja de entrada', 'success') : false )
        .catch(this.catch)
      } else {
        if (user.complete) {
          Router.push(`/${collection}/sessions`)
        } else {
          Router.push(`/${collection}/registry`)
        }
      }
    }
    if (error && error.show && error.error) {
      if (error.error.data && error.error.data === 'auth/wrong-password') {
        swal(error.error.message, { buttons: { ok: 'Ok', resent: 'Reenviar contraseña' }, icon: 'warning' })
        .then(res => {
          this.props.actions.removeError()
          if (res === 'resent') {
            return resentPassword(user.email)
          }
        })
        .then(res => res ? swal('Contraseña reenviada', 'Se ha enviado un correo para cambiar la constraseña, revisa to bandeja de entrada.', 'success') : false )
        .catch(this.catch)
      } else {
        swal(error.error.code, error.error.message, 'warning').then(() => this.props.actions.removeError())
      }
    }
  }

  catch = error => {
    if (error) {
      swal("Oh noes!", "The AJAX request failed!", "error")
    } else {
      swal.stopLoading();
      swal.close();
    }
  }

  login = ({ user, password }) => {
    this.props.actions.setLogin.bind(this)(user, password)
  }
  render() {
    return (
      <LoginComponent {...this.props} collection={collection} login={this.login} />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    setLogin: (usr, pwd) => dispatch(login(usr, pwd, collection)),
    removeError: () => dispatch(removeError())
  }
})

const mapStateToProps = ({ USER = INITIAL_STATE_USER , ERROR = INITIAL_STATE_ERROR }) => ({
  user: USER.user,
  error: ERROR
})



export default connect(mapStateToProps, mapDispatchToProps)(Login)