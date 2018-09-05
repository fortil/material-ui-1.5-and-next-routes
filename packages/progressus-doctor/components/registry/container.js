import ComponentSign from './component'
import React, { Component } from 'react'
// import { auth } from 'progressus-core/build/lib/firebase'
import { registerUserApi, getUserApi } from 'progressus-core/build/api/user'
import { USER as USER_STATE_INITIAL } from 'progressus-core/build/redux/states'
// import swal from 'sweetalert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import Router from 'next/router'

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
  register = async () => {
    
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