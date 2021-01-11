import { _getUsers } from '../_DATA'
import { SHOW_USERS_LOADING, HIDE_USERS_LOADING } from './loading'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER'

export function handleGetUsers() {
  return (dispatch) => {
    dispatch({ type: SHOW_USERS_LOADING })
    return _getUsers().then(users => {
      dispatch({ type: RECEIVE_USERS, users })
      dispatch({ type: HIDE_USERS_LOADING })
    })
  }
}