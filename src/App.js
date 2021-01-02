import React, { Component } from 'react'
import Login from './components/Login'
import Questions from './components/Questions'
import { connect } from 'react-redux'

class App extends Component {

  render() {

    const { authedUserId } = this.props

    if (!authedUserId)
      return <Login />

    return <Questions />
  }
}

function mapStateToProps({ authedUserId }, props) {
  return { ...props, authedUserId }
}

export default connect(mapStateToProps)(App)
