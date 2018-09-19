import React, { Component } from 'react'
import RegistryComponent from '#/components/registry'

class Registry extends Component {
  static collection = 'consultant'
  render() {
    return (
      <RegistryComponent {...this.props} collection={Registry.collection} />
    )
  }
}

export default Registry