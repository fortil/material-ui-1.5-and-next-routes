import {
  SET_USER,
  SET_LOADING,
  SET_ERROR,
  REMOVE_ERROR,
  REMOVE_LOADING,
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

export function setLoading(show) {
  return {
    type: show ? SET_LOADING : REMOVE_LOADING
  }
}
