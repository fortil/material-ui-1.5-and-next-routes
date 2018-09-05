import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { wrapDisplayName } from 'recompose'
import hoistStatics from 'hoist-non-react-statics'
import { checkIfUserIsAuthenticated } from './api/user'

const withUserCheck = WrappedComponent => {
  class ComponentWithUserCheck extends Component {
    static displayName = wrapDisplayName(WrappedComponent, 'withUserCheck')

    static WrappedComponent = WrappedComponent

    static propTypes = {
      wrappedComponentRef: PropTypes.func
    }

    static getInitialProps = async ctx => {
      const wrappedComponentProps = typeof WrappedComponent.getInitialProps === 'function'
        ? await WrappedComponent.getInitialProps(ctx)
        : {}

      // Pseudo-function which you will have to write yourself.
      // Read about what you can extract from ctx in getInitialProps() here:
      // https://github.com/zeit/next.js#fetching-data-and-component-lifecycle
      // You can redirect via Express'es res.redirect() here if this is a
      // server call (check ctx.req and ctx.res) or with next/router if it
      // is a client-side call.
      const isAuthenticated = checkIfUserIsAuthenticated(ctx)
      return { ...wrappedComponentProps, isAuthenticated }
    }

    render = () => {
      const { wrappedComponentRef, ...restProps } = this.props

      return (
        <WrappedComponent {...restProps} ref={wrappedComponentRef} />
      )
    }
  }

  return hoistStatics(ComponentWithUserCheck, WrappedComponent)
}

export default withUserCheck