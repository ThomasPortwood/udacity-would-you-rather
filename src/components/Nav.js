import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function Nav() {

  const history = useHistory()
  const location = useLocation()
  const authedUser = useSelector(state => state.authedUser)

  function onClick(e, { name }) {
    history.push(name)
  }

  return (
    <Menu fluid vertical tabular>
      <Menu.Item
        name={'/'}
        key={'/'}
        active={location.pathname === '/'}
        onClick={onClick} 
        content={'Dashboard'} />
      <Menu.Item
        name={'/add'}
        key={'/add'}
        active={location.pathname === '/add'}
        onClick={onClick}
        content={'Add Question'}
      />
      <Menu.Item
        name={'/leaderboard'}
        key={'/leaderboard'}
        active={location.pathname === '/leaderboard'}
        onClick={onClick}
        content={'Leaderboard'}
      />
      <Menu.Item
        name={'/profile'}
        key={'/profile'}
        active={location.pathname === '/profile'}
        onClick={onClick}
        content={authedUser?.name || 'Profile'}
      />
      <Menu.Item
        name='/logout'
        active={location.pathname === '/logout'}
        onClick={onClick}
        content={'Logout'}
      />
    </Menu >
  )
}