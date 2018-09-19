import React, { Component } from 'react'
import SignComponent from '#/components/signin'
import { removeError } from '#/api/redux/actions'
import { USER as INITIAL_STATE_USER, ERROR as INITIAL_STATE_ERROR } from '#/api/redux/states'
import { signIn, resentPassword, sendEmailVerification} from '#/api/user'
import { connect } from 'react-redux'
import Router from 'next/router'
import swal from 'sweetalert'

const collection = 'consultant'
class Sign extends Component {
  static collection = collection

  componentWillReceiveProps({ user, error }) {
    if (user && Object.keys(user).length) {
      if (user.emailVerified) {
        Router.push(`/${collection}/registry`)
      } else {
        swal('Por favor verifique el email', 'Por favor verifique el email para iniciciar sesión', 'success')
        .then(() => Router.push(`/${collection}`))
      }
    }
    if (error && error.show && error.error) {
      if (error.error.data && error.error.data === 'auth/email-already-in-use') {
        swal(error.error.message, { buttons: { ok: 'Ok', resent: 'Reenviar contraseña' }, icon: 'warning' })
        .then(res => {
          this.props.actions.removeError()
          if (res === 'resent') {
            return resentPassword(user.email)
          }
        })
        .then(res => res ? swal('Contraseña reenviada', 'Se ha enviado un correo para cambiar la constraseña, revisa to bandeja de entrada.', 'success') : false )
        .catch(error => {
          if (error) {
            swal("Oh noes!", "The AJAX request failed!", "error")
          } else {
            swal.stopLoading();
            swal.close();
          }
        })
      } else {
        swal(error.error.code, error.error.message, 'warning').then(() => this.props.actions.removeError())
      }
    }
  }

  sign = user => {
    this.props.actions.signIn(user)
  }

  render() {
    return (
      <SignComponent {...this.props} collection={collection} register={this.sign} />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    signIn: user => dispatch(signIn(user, collection)),
    removeError: () => dispatch(removeError()),
  }
})

const mapStateToProps = ({ USER = INITIAL_STATE_USER, ERROR = INITIAL_STATE_ERROR }) => ({
  user: USER.user,
  error: ERROR,
})


export default connect(mapStateToProps, mapDispatchToProps)(Sign)