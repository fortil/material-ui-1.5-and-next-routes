import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { wrapDisplayName } from 'recompose'
import hoistStatics from 'hoist-non-react-statics'
import { checkIfUserIsAuthenticated } from '#/api/user'

const withUserCheck = WrappedComponent => {
  const collection = WrappedComponent.collection
  class ComponentWithUserCheck extends Component {
    state = { goToCheck: null }
    static displayName = wrapDisplayName(WrappedComponent, 'withUserCheck')

    static WrappedComponent = WrappedComponent

    static propTypes = {
      wrappedComponentRef: PropTypes.func
    }
    componentDidMount() {
      if (process.browser) {
        const auth = await checkIfUserIsAuthenticated(ctx)
        const goToCheck = getRoutes(auth, ctx.pathname, collection)
        this.setState({ goToCheck })
      }
    }

    static getInitialProps = async ctx => {
      const wrappedComponentProps = typeof WrappedComponent.getInitialProps === 'function'
        ? await WrappedComponent.getInitialProps(ctx)
        : {}
      if (ctx && ctx.res && ctx.res.writeHead) {
        ctx.res.writeHead(302, { Location: `/${collection}` })
        ctx.res.end()
      }
      const auth = await checkIfUserIsAuthenticated(ctx)
      const goToCheck = getRoutes(auth, ctx.pathname, collection)
      return { ...wrappedComponentProps, goToCheck }
    }

    render = () => {
      const { wrappedComponentRef, ...restProps } = this.props
      let goToCheck = restProps.goToCheck
      if (process.browser) {
        goToCheck = this.setState.goToCheck
      }

      return (
        <WrappedComponent {...restProps} goToCheck={goToCheck} ref={wrappedComponentRef} />
      )
    }
  }

  return hoistStatics(ComponentWithUserCheck, WrappedComponent)
}


function getRoutes(auth) {
  if (!auth.isUser) {
    return '/sign'
  }
  if (!auth.isVerified) {
    return '/login'
  }
  if (!auth.isComplete) {
    return '/registry'
  }
  return
}
export default withUserCheck