import { 
  SHOW_USERS_LOADING,
  HIDE_USERS_LOADING,
  SHOW_QUESTIONS_LOADING, 
  HIDE_QUESTIONS_LOADING 
} from '../actions/loading'

export function usersLoading(state = false, action) {
  switch (action.type) {
    case SHOW_USERS_LOADING:
      return true
    case HIDE_USERS_LOADING:
      return false
    default:
      return state
  }
}

export function questionsLoading(state = false, action) {
  switch (action.type) {
    case SHOW_QUESTIONS_LOADING:
      return true
    case HIDE_QUESTIONS_LOADING:
      return false
    default:
      return state
  }
}