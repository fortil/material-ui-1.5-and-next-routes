import { 
  USER as INITIAL_STATE_USER,
  ERROR as INITIAL_STATE_ERROR,
  LOADING as INITIAL_STATE_LOADING,
  SESSIONS as INITIAL_STATE_SESSIONS,
} from './states'
import {
  SET_USER,
  REMOVE_USER,
  SET_LOADING,
  REMOVE_LOADING,
  SET_ERROR,
  REMOVE_ERROR,
  SET_SESSIONS,
} from './actionsType'
import { combineReducers } from 'redux'

const USER = (state = INITIAL_STATE_USER, { type, user }) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user
      }
    case REMOVE_USER:
      return {
        ...state,
        user: null,
        error: null
      }
    default:
      return state
  }
}

const SESSIONS = (state = INITIAL_STATE_SESSIONS, { type, data }) => {
  switch (type) {
    case SET_SESSIONS:
      return {
        ...state,
        sessions: data
      }
    default:
      return state
  }
}

const ERROR = (state = INITIAL_STATE_ERROR, { type, error, place }) => {
  switch (type) {
    case SET_ERROR:
      return {
        ...state,
        error,
        place,
        show: true
      }
    case REMOVE_ERROR:
      return {
        ...state,
        error: null,
        place: null,
        show: false,
      }
    default:
      return state
  }
}

const LOADING = (state = INITIAL_STATE_LOADING, { type }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        show: true
      }
    case REMOVE_LOADING:
      return {
        ...state,
        show: false,
      }
    default:
      return state
  }
}


export default combineReducers({
  USER,
  ERROR,
  LOADING,
  SESSIONS,
})