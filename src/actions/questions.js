import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../_DATA'
import { ADD_QUESTION_TO_USER, ADD_ANSWER_TO_USER } from './users'
import { SHOW_QUESTIONS_LOADING, HIDE_QUESTIONS_LOADING } from './loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const RECEIVE_SAVED_QUESTION = 'RECEIVE_SAVED_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const ADD_USER_TO_ANSWER_VOTES = 'ADD_USER_TO_ANSWER_VOTES'

export function handleGetQuestions() {
  return (dispatch, getState) => {
    dispatch({ type: SHOW_QUESTIONS_LOADING })
    return _getQuestions()
      .then(questions => {
        dispatch({ type: RECEIVE_QUESTIONS, questions })
        dispatch({ type: HIDE_QUESTIONS_LOADING })
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

export function handleSaveQuestionAnswer(qid, answer) {
  return (dispatch, getState) => {

    const { authedUser } = getState()

    if (!authedUser)
      return

    return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch({ type: ADD_ANSWER_TO_USER, authedUser, qid, answer })
      dispatch({ type: ADD_USER_TO_ANSWER_VOTES, authedUser, qid, answer })
    })
  }
}