import React, { Component } from 'react'
import RegistryComponent from '#/components/registry'

class Registry extends Component {
  static collection = 'doctor'
  render() {
    return (
      <RegistryComponent {...this.props} collection={Registry.collection} />
    )
  }
}

export default Registry