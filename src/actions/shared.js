import { _getUsers } from '../_DATA'


export const RECEIVE_USERS = 'RECEIVE_USERS'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'


export const GET_QUESTIONS = 'GET_QUESTIONS'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'


export const SAVE_QUESTION = 'SAVE_QUESTION'

export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function handleGetUsers() {
  return (dispatch) => {
    _getUsers().then((users) => {
      dispatch(receiveUsers(users))
    })
  }
}
