import {combineReducers} from 'redux'
import {users} from './users'
import {authedUserId} from './authedUserId'
import {questions} from './questions'

export default combineReducers({users, authedUserId, questions})