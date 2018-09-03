import { USER as INITIAL_STATE_USER } from '../states'
import { SET_USER } from '../actionsType'

export default (state = INITIAL_STATE_USER, {type, user, token}) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        token,
        user,
        fetching: true
      }
    default:
      return state
  }
}