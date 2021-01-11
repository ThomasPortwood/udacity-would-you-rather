import {
  RECEIVE_QUESTIONS,
  RECEIVE_SAVED_QUESTION,
  ADD_USER_TO_ANSWER_VOTES
} from '../actions/questions'

export function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return { ...state, ...action.questions }
    case RECEIVE_SAVED_QUESTION:
      return { ...state, [action.question.id]: action.question }
    case ADD_USER_TO_ANSWER_VOTES:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([action.authedUser])
          }
        }
      }
    default:
      return state
  }
}