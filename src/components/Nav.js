import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeAuthedUser } from '../actions/authedUser'

export default function Nav() {

  const authedUser = useSelector(state => state.authedUser)

  function handleLogout() {
    const { dispatch } = this.props
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