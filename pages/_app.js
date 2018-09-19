import React from 'react'
import App, { Container } from 'next/app'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import getPageContext from '#/src/getPageContext'
import LoginLayout from '#/components/layouts/login'
import Layout from '#/components/layouts'
import withReduxStore from '#/api/redux/width'
import { Provider } from 'react-redux'


class MyApp extends App {
  constructor(props) {
    super(props)
    this.pageContext = getPageContext()
  }

  pageContext = null

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, reduxStore, ...pageProps } = this.props
    const { router } = pageProps
    let View = <Component pageContext={this.pageContext} {...pageProps} />

    if (['/doctor', '/consultant', '/doctor/sign', '/consultant/sign'].includes(router.pathname)) {
      View = (<LoginLayout  reduxStore={reduxStore} pageContext={this.pageContext} {...pageProps}>
        <Component reduxStore={reduxStore} pageContext={this.pageContext} {...pageProps} />
      </LoginLayout>)
    } else {
      View = (<Layout reduxStore={reduxStore} pageContext={this.pageContext} {...pageProps} >
        <Component reduxStore={reduxStore} pageContext={this.pageContext} {...pageProps} />
      </Layout>)
    }

    return (
      <Container>
        <Provider store={reduxStore}>
          {/* Wrap every page in Jss and Theme providers */}
          <JssProvider
            registry={this.pageContext.sheetsRegistry}
            generateClassName={this.pageContext.generateClassName}
          >
            {/* MuiThemeProvider makes the theme available down the React
                tree thanks to React context. */}
            <MuiThemeProvider
              theme={this.pageContext.theme}
              sheetsManager={this.pageContext.sheetsManager}
            >
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              {/* Pass pageContext to the _document though the renderPage enhancer
                  to render collected styles on server side. */}
              {View}
            </MuiThemeProvider>
          </JssProvider>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)