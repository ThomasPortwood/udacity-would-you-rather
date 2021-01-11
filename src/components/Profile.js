import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default function Profile(props) {

  const authedUser = useSelector(state => state.authedUser)
  const users = useSelector(state => state.users)

  if (!authedUser)
    return <Redirect to='/login' push={true} />

  return (
    <div>
      {`Profile - ${users[authedUser].name}`}
    </div>
  )
}