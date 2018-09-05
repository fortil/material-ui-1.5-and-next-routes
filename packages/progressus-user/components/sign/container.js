import ComponentSign from './component'
import React, { Component } from 'react'
import { auth } from 'progressus-core/build/lib/firebase'
import { registerUserApi, getUserApi } from 'progressus-core/build/api/user'
import { USER as USER_STATE_INITIAL } from 'progressus-core/build/redux/states'
import swal from 'sweetalert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Router from 'next/router'

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = { user: props.user }
  }
  componentWillReceiveProps({ user }) {
    if (user) {
      this.setState({ user })
    }
  }
  componentDidMount() {
    this.props.getUser()
  }
  register = async ({email, password, ...otherParams}) => {
    if (email && password) {
      try {
        const action = await swal({
          title: 'Estas seguro de registrarte?',
          text: 'Seras registrado con el correo y la contraseña prorporcionada.',
          button: {
            text: 'Registrarme',
            closeModal: false,
          },
        })
        let userRegistried
        if (action) {
          let { user } = await auth().createUserWithEmailAndPassword(email, password)
          userRegistried = user
        } else {
          throw null
        }

        await this.props.setUser({...userRegistried, ...otherParams, type: 'doctor' })
        await swal(
          'Registro exitoso', 
          'Se ha registrado exitosamente, lo invitamos a confirmar su email para tener un registro exitoso', 
          'info'
        )

        Router.push({ pathname: '/login' })

      } catch (error) {
        if (error) {
          swal(`Hubo un error ${error.code}`, error.message, 'error')
        } else {
          swal.stopLoading()
          swal.close()
        }
      }
    } else {
      swal('Falta un campo', 'El email y la contraseña son obligatorios', 'warning')
    }
  }
  render() {
    return (
      <ComponentSign
        register={this.register}
        // change={console.log}
      ></ComponentSign>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(registerUserApi(user)),
  getUser: () => dispatch(getUserApi())
})

const mapStateToProps = (state = { user: USER_STATE_INITIAL }) => ({
  user: state.user.user
})

Container.propTypes = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)