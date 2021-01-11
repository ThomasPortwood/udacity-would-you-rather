import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { removeAuthedUser } from '../actions/authedUser'
import { Menu } from 'semantic-ui-react'

export default function Nav() {

  const dispatch = useDispatch()
  const history = useHistory()
  const authedUser = useSelector(state => state.authedUser)
  const [item, setItem] = useState('/')

  function onClick(e, { name }) {
    setItem(name)
    history.push(name)
  }

  function handleLogout() {
    dispatch(removeAuthedUser())
  }

  return (
    <Menu fluid vertical tabular>
      <Menu.Item
        name={'/'}
        key={'/'}
        active={item === '/'}
        onClick={onClick} content={'Dashboard'} />
      <Menu.Item
        name={'/add'}
        key={'/add'}
        active={item === '/add'}
        onClick={onClick}
        content={'Add Question'}
      />
      <Menu.Item
        name={'/leaderboard'}
        key={'/leaderboard'}
        active={item === '/leaderboard'}
        onClick={onClick}
        content={'Leaderboard'}
      />
      <Menu.Item
        name={'/profile'}
        key={'/profile'}
        active={item === '/profile'}
        onClick={onClick}
        content={authedUser?.name || 'Profile'}
      />
      <Menu.Item
        name='/logout'
        active={item === '/logout'}
        onClick={handleLogout}
        content={'Logout'}
      />
    </Menu >
  )
}