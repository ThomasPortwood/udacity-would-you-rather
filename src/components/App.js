import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './Login'
import Nav from './Nav'
import Profile from './Profile'
import Home from './Home'
import AddQuestion from './AddQuestion'
import Leaderboard from './Leaderboard'
import QuestionPage from './QuestionPage'
import { handleGetUsers } from '../actions/users'
import { Grid, Segment } from 'semantic-ui-react'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleGetUsers())
  }

  render() {
    return (
      <BrowserRouter>
        <Segment>
          <Grid>
            <Grid.Column width={4}>
              <Nav />
            </Grid.Column>
            <Grid.Column width={12}>
              <Route path='/login' component={Login} />
              <Route exact path='/' component={Home} />
              <Route path='/questions/:id' component={QuestionPage} />
              <Route path='/profile' component={Profile} />
              <Route path='/add' component={AddQuestion} />
              <Route path='/leaderboard' component={Leaderboard} />
            </Grid.Column>
          </Grid>
        </Segment>
      </BrowserRouter >
    )
  }
}

function mapStateToProps({ authedUser, loading }, props) {
  return { ...props, authedUser, loading }
}

export default connect(mapStateToProps)(App)
