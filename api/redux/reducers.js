import { 
  USER as INITIAL_STATE_USER,
  ERROR as INITIAL_STATE_ERROR,
} from './states'
import {
  SET_USER,
  SET_USER_ERROR,
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


export default combineReducers({
  USER,
  ERROR
})