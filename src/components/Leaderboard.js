import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { List, Image, Segment } from 'semantic-ui-react'

export default function Leaderboard() {

  const authedUser = useSelector(state => state.authedUser)
  const users = useSelector(state => state.users)

  if (!authedUser)
    return <Redirect to='/login' push={true} />

  const ranked = Object.keys(users).sort((a, b) => {
    const rankA = Object.keys(users[a].answers).length + users[a].questions.length
    const rankB = Object.keys(users[b].answers).length + users[b].questions.length
    return rankB - rankA
  })

  return (
    <List>
      {ranked.map(id =>
        <List.Item key={id}>
          <Segment compact>
            <Image
              src={users[id].avatarURL}
              avatar
            />
            <span>{`${users[id].name}: answered ${Object.keys(users[id].answers).length}, asked ${users[id].questions.length}`}</span>
          </Segment>
        </List.Item>)}
    </List>
  )
}