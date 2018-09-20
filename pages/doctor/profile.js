import React, { Component } from 'react'
import RegistryComponent from '#/components/registry'
import widthUserCheck from '#/components/withUserCheck'
import { fillDataUser } from '#/api/user'
import { USER as USER_INITIAL_STATE, ERROR as ERROR_INITIAL_STATE } from '#/api/redux/states'
import Router from 'next/router'
import { connect } from 'react-redux'
import swal from 'sweetalert'

const collection = 'doctor'

@widthUserCheck
class Profile extends Component {
  static collection = collection
  componentDidMount() {
    if (this.props.pageProps.goToCheck) {
      Router.push(`/${collection}${this.props.pageProps.goToCheck}`)
    }
  }

  componentWillReceiveProps({ user, error }) {
    if (error.error && error.show) {
      swal(error.code, error.message, 'warning')
    }
  }

  submit = values => {
    this.props.actions.fillDataUser(values)
  }

  render() {
    return (
      <RegistryComponent {...this.props} collection={collection} submit={this.submit} {...this.props.user} buttonText="Guardar" />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: { fillDataUser: user => dispatch(fillDataUser(user, collection)) }
})

const mapStateToProps = ({ USER = USER_INITIAL_STATE, ERROR = ERROR_INITIAL_STATE }) => ({
  user: USER.user,
  error: ERROR
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)