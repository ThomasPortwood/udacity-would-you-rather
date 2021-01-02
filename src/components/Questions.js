import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleGetQuestions } from '../actions/questions'

class Questions extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleGetQuestions())
  }

  render() {
    const {questions} = this.props

    if (!questions)
      return <div>Not logged in</div>

    return <ul>{Object.keys(questions).map(k => <li key={k}>{k}</li>)}</ul>
  }
}

function mapStateToProps({authedUserId, questions}, props) {
  return {...props, authedUserId, questions}
}

export default connect(mapStateToProps)(Questions)
