import React, { Component } from 'react'
import RegistryComponent from '#/components/registry'
import widthUserCheck from '#/components/withUserCheck'
import Router from 'next/router'

const collection = 'doctor'

@widthUserCheck
class Registry extends Component {
  static collection = collection
  componentDidMount() {
    if (this.props.pageProps.goToCheck) {
      Router.push(`/${collection}${this.props.pageProps.goToCheck}`)
    }
  }
  render() {
    return (
      <RegistryComponent {...this.props} collection={Registry.collection} />
    )
  }
}

export default Registry