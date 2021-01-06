import { RECEIVE_USERS, ADD_QUESTION_TO_USER } from '../actions/users'

export function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, ...action.users }
    case ADD_QUESTION_TO_USER:
      const user = state[action.question.author]
      const questions = user.questions
      return {
        ...state,
        [action.question.author]: {
          ...user,
          questions: questions.concat([action.question.id])
        }
      }
    default:
      return state
  }
}