import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleGetUsers} from '../actions/shared'

class Login extends Component {

  componentDidMount() {
    this.props.dispatch(handleGetUsers())
  }

  render() {

    const {users} = this.props

    return (
      <ul>
        {JSON.stringify(users)}
      </ul>
    )
  }

}

function mapStateToProps({users}, props) {
  console.log(users)
  return {...props, users}
}

export default connect(mapStateToProps)(Login)