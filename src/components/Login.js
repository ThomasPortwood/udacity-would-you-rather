import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { handleGetQuestions } from '../actions/questions'

const defaultSelectValue = 'Select User'

export default function Login() {

  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  function handleLogin(id) {
    dispatch(setAuthedUser(users[id]))
    dispatch(handleGetQuestions())
  }

  return (
    <select onChange={(e) => handleLogin(e.target.value)} defaultValue={defaultSelectValue}>
      <option disabled>{defaultSelectValue}</option>
      {Object.keys(users).map(k => <option value={k} key={k}>{k}</option>)}
    </select>
  )
}