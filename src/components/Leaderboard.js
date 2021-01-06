import React from 'react'
import {useSelector} from 'react-redux'

function getUserScore(user) {
  return Object.keys(user.answers).length + user.questions.length
}

export default function Leaderboard() {

  const users = useSelector(state => state.users)

  return (
    <ul>
      {Object.keys(users).map(id => <li key={id}>{`${users[id].name} = ${getUserScore(users[id])}`}</li>)}
    </ul>
  )
}