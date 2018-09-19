import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import * as initialStore from './states'
import reducers from './reducers'
// import axios from '../lib/axios'

const middlewares = [thunkMiddleware]
// const middlewares = [thunkMiddleware.withExtraArgument({ axios })]

if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger').createLogger
  const logger = createLogger({ collapsed: true })
  middlewares.push(logger)
}

export function initializeStore (initialState = initialStore) {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middlewares)))
}
