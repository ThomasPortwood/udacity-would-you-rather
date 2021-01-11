import { combineReducers } from 'redux'
import { users } from './users'
import { authedUser } from './authedUser'
import { questions } from './questions'
import { usersLoading, questionsLoading } from './loading'

export default combineReducers({
  usersLoading,
  authedUser,
  questionsLoading,
  questions,
  users
})