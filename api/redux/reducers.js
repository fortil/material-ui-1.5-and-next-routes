import { 
  USER as INITIAL_STATE_USER,
  ERROR as INITIAL_STATE_ERROR,
  LOADING as INITIAL_STATE_LOADING,
} from './states'
import {
  SET_USER,
  SET_LOADING,
  REMOVE_LOADING,
  SET_ERROR,
  REMOVE_ERROR,
} from './actionsType'
import { combineReducers } from 'redux'

const USER = (state = INITIAL_STATE_USER, { type, user }) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user
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
})