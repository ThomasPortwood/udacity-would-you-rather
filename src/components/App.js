import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './Login'
import Nav from './Nav'
import Profile from './Profile'
import QuestionList from './QuestionList'
import AddQuestion from './AddQuestion'
import Leaderboard from './Leaderboard'
import Loading from './Loading'
import { handleGetUsers } from '../actions/users'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleGetUsers())
  }

  render() {

    const { authedUser, loading } = this.props

    if (loading)
      return <Loading />

    if (!authedUser)
      return <Login />

    return (
      <BrowserRouter>
        <Nav />
        <div>
          <Route exact path='/' component={QuestionList} />
          <Route path='/profile' component={Profile} />
          <Route path='/add' component={AddQuestion} />
          <Route path='/leaderboard' component={Leaderboard} />
        </div>
      </BrowserRouter >
    )
  }
}

function mapStateToProps({ authedUser, loading }, props) {
  return { ...props, authedUser, loading }
}

export default connect(mapStateToProps)(App)
