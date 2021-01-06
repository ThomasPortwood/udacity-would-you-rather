import { RECEIVE_QUESTIONS, RECEIVE_SAVED_QUESTION } from '../actions/questions'

export function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return { ...state, ...action.questions }
    case RECEIVE_SAVED_QUESTION:
      return { ...state, [action.question.id]: action.question }
    default:
      return state
  }
}