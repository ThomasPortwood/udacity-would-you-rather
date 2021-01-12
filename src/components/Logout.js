import React from 'react'
import { removeAuthedUser } from '../actions/authedUser'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default function Logout() {

  const dispatch = useDispatch()
  const authedUser = useSelector(state => state.authedUser)

  function handleLogout() {
    dispatch(removeAuthedUser())
  }

  if (!authedUser)
    return <Redirect to='/login' push={true} />

  return (
    <Button onClick={handleLogout}>
      Logout
    </Button>
  )
}