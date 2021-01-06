import { _getQuestions, _saveQuestion } from '../_DATA'
import { SHOW_LOADING, HIDE_LOADING } from './loading'
import { ADD_QUESTION_TO_USER } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const RECEIVE_SAVED_QUESTION = 'RECEIVE_SAVED_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function handleGetQuestions() {
  return (dispatch, getState) => {
    dispatch({ type: SHOW_LOADING })
    return _getQuestions()
      .then(questions => {
        dispatch({ type: RECEIVE_QUESTIONS, questions })
        dispatch({ type: HIDE_LOADING })
      })
  }
}

export function handleSaveQuestion(question) {
  return (dispatch, getState) => {
    return _saveQuestion(question).then(question => {
      dispatch({ type: RECEIVE_SAVED_QUESTION, question })
      dispatch({ type: ADD_QUESTION_TO_USER, question })
    })
  }
}