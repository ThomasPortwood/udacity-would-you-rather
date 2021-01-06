import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile(props) {

  const user = useSelector(state => state.authedUser)

  return (
    <div>
      {`Profile - ${user.name}`}
    </div>
  )
}