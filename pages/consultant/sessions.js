import React, { Component } from 'react'
import SessionsComponent from '#/components/sessions'
import { getDoctor } from '#/api/user'
import PropTypes from 'prop-types'

const session = {
  active: true,
  date: '3 de septiembre de 2018, 05:00:00 UTC-5',
  done: "0",
  idAppear: "13245asd568797asd",
  idConsultant: "u6S5DbGP0pVUzgvpo7YMvqnEpJp1",
  idDoctor: "u6S5DbGP0pVUzgvpo7YMvqnEpJp1",
  linkScheduler: "http://www.setmore.com/hashdhjasjdajsdajs",
  numTotalSessions:  "8"
}

class Sessions extends Component {
  state = {
    sessions: []
  }
  static collection = 'consultant'
  
  componentDidMount() {
    let sessions = this.props.getSessions(session)
    const doctorsId = sessions.map(session => session.idDoctor)
    const doctors = this.props.getDoctor(doctorsId)
    sessions = sessions.map(session => {
      session.doctor = doctors.reduce((prev, doctor) => prev || doctor.uid === session.idDoctor ? doctor : null, null)
      return session
    })
    this.setState({ sessions })
  }

  render() {
    return (
      <SessionsComponent {...this.props} collection={Sessions.collection}  sessions={this.state.sessions} />
    )
  }
}


Sessions.propTypes = {
  getSessions: PropTypes.func,
  getDoctor: PropTypes.func
}

Sessions.defaultProps = {
  getSessions,
  getDoctor
}

function getSessions(session) {
  let array = (new Array(+session.numTotalSessions)).fill(1).map((_, i) => Object.assign({ id: i }, session ))
  return array
}

export default Sessions