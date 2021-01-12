import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import { handleGetQuestions } from '../actions/questions'
import { Loader } from 'semantic-ui-react'

const defaultSelectValue = 'Please select user to log in'

export default function Login() {

  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const usersLoading = useSelector(state => state.usersLoading)
  const history = useHistory()

  function handleLogin(id) {
    dispatch(setAuthedUser(id))
    dispatch(handleGetQuestions())
    history.goBack()
  }

  if (usersLoading)
    return <Loader active/>

  return (
    <select
      onChange={(e) => handleLogin(e.target.value)}
      defaultValue={defaultSelectValue}
    >
      <option disabled>{defaultSelectValue}</option>
      {Object.keys(users).map(k => <option value={k} key={k}>{k}</option>)}
    </select>
  )
}