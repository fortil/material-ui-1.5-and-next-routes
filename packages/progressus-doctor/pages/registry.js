import React, { Component } from 'react'
import Registry from '../components/registry'
import Layout from 'progressus-core/build/layout'
import withUserCheck from 'progressus-core/build/withUserCheck'

@withUserCheck
class RegistryPage extends Component {
  render () {
    return (
      <Layout style={{width: '100%', height: '100%'}}>
        <Registry />
      </Layout>
    )
  }
}

export default RegistryPage
