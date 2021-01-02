import { _getUsers, _getQuestions } from '../_DATA'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'

export const SET_AUTHED_USER_ID = 'SET_AUTHED_USER_ID'

export function setAuthedUserId(userId) {
  return {
    type: SET_AUTHED_USER_ID,
    userId
  }
}
