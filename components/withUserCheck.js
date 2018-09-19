import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { wrapDisplayName } from 'recompose'
import hoistStatics from 'hoist-non-react-statics'
import { checkIfUserIsAuthenticated } from '#/api/user'

const withUserCheck = WrappedComponent => {
  const collection = WrappedComponent.collection
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
      if (ctx && ctx.res && ctx.res.writeHead) {
        ctx.res.writeHead(302, { Location: `${collection}` })
        ctx.res.end()
      }
      const auth = await checkIfUserIsAuthenticated(ctx)
      const goToCheck = getRoutes(auth, ctx.pathname, collection)
      return { ...wrappedComponentProps, goToCheck }
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

const Validations = {
  'registry': ({ isUser, isVerified, isComplete }) => {
    if (!isUser) {
      return '/sign'
    }
    if (!isVerified) {
      return '/login'
    }
    if (isComplete) {
      return '/profile'
    } else {
      return
    }
  }
}

function getRoutes(auth, path, collection) {
  const key = path.replace(`/${collection}/`, '')
  return Validations[key](auth)
}
export default withUserCheck