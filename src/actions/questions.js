import {_getQuestions} from '../_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function saveQuestion() {
  
}

export function handleGetQuestions() {
  return (dispatch) => {
    return _getQuestions().then(questions => dispatch(receiveQuestions(questions)))
  }
}