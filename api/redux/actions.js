import {
  SET_USER,
  SET_USER_ERROR,
  SET_ERROR,
  REMOVE_ERROR,
} from './actionsType'

export function setUser(user) {
  return {
    type: SET_USER,
    user
  }
}

export function setError(error, place) {
  return {
    type: SET_ERROR,
    error,
    place
  }
}
export function removeError() {
  return {
    type: REMOVE_ERROR
  }
}
