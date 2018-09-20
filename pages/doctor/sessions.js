import React, { Component } from 'react'
import SessionsComponent from '#/components/sessions'
import { getSessions } from '#/api/session'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import withUserCheck from '#/components/withUserCheck'
import { SESSIONS as SESSIONS_INITIAL_STATE, ERROR as ERROR_INITIAL_STATE } from '#/api/redux/states'
import swal from 'sweetalert'

const collection = 'doctor'

@withUserCheck
class Sessions extends Component {
  state = {
    sessions: []
  }
  static collection = collection
  componentWillReceiveProps({ error, sessions }) {
    if (error.error && error.show) {
      swal(error.error.code, error.error.message, 'warning')
    }
    if (sessions && sessions.length) {
      this.setState({ sessions: sessions.sort(({ num: a }, { num: b }) =>  a - b) })
    }
  }

  componentDidMount() {
    this.props.actions.getSessions()
  }

  handleClickSession = session => () => {
    const win = window.open(`https://appear.in/${session.idAppear}`, '_blank')
    win.focus()
  }

  render() {
    return (
      <SessionsComponent {...this.props} collection={collection} sessions={this.state.sessions} clickSession={this.handleClickSession} />
    )
  }
}

Sessions.propTypes = {
  getSessions: PropTypes.func,
  getDoctor: PropTypes.func
}

const mapDispatchToProps = dispatch => ({
  actions: {
    getSessions: () => dispatch(getSessions(collection)),
  }
})

const mapStateToProps = ({ SESSIONS = SESSIONS_INITIAL_STATE, ERROR = ERROR_INITIAL_STATE }) => ({
  sessions: SESSIONS.sessions,
  error: ERROR,
})

export default connect(mapStateToProps, mapDispatchToProps)(Sessions)