import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeAuthedUser } from '../actions/authedUser'

export default function Nav() {

  const dispatch = useDispatch()
  const authedUser = useSelector(state => state.authedUser)

  function handleLogout() {
    dispatch(removeAuthedUser())
  }

  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/profile'>{authedUser.name}</Link>
      <Link to='/add'>Add Question</Link>
      <Link to='/leaderboard'>Leaderboard</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  )
}