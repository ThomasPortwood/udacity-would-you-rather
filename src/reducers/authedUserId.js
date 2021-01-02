import { SET_AUTHED_USER_ID } from '../actions/shared'

export function authedUserId(state = '', action) {
  switch (action.type) {
    case SET_AUTHED_USER_ID:
      return { authedUserId: action.userId }
    default:
      return state
  }
}