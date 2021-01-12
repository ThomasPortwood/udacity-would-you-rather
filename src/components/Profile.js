import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Image } from 'semantic-ui-react'

export default function Profile(props) {

  const authedUser = useSelector(state => state.authedUser)
  const users = useSelector(state => state.users)

  if (!authedUser)
    return <Redirect to='/login' push={true} />

  return (
    <div>
      <div>
        <Image
          src={users[authedUser].avatarURL}
          avatar
        />
      </div>
      <br />
      <div>
        {`Id: ${users[authedUser].id}`}
      </div>
      <br />
      <div>
        {`Name: ${users[authedUser].name}`}
      </div>
      <br />
    </div>
  )
}