import React, { Component } from 'react'
import SignComponent from '#/components/signin'

class Sign extends Component {
  static collection = 'doctor'
  render() {
    return (
      <SignComponent {...this.props} collection={Sign.collection} />
    )
  }
}

export default Sign