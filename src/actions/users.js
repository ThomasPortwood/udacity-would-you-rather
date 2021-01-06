import { _getUsers } from '../_DATA'
import { SHOW_LOADING, HIDE_LOADING } from './loading'

export const RECEIVE_USERS = 'RECEIVE_USERS'

export function handleGetUsers() {
  return (dispatch) => {
    dispatch({ type: SHOW_LOADING })
    return _getUsers().then(users => {
      dispatch({ type: RECEIVE_USERS, users })
      dispatch({ type: HIDE_LOADING })
    })
  }
}