import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleGetUsers } from '../actions/users'
import { setAuthedUserId } from '../actions/shared'

class Login extends Component {

  componentDidMount() {
    this.props.dispatch(handleGetUsers())
  }

  render() {

    const { users, dispatch } = this.props

    if (!users)
      return <div>Loading ...</div>

    return (
      <select onChange={(e) => dispatch(setAuthedUserId(e.target.value))}>
        {Object.keys(users).map(k => <option value={k} key={k}>{k}</option>)}
      </select>
    )
  }

}

function mapStateToProps({ users }, props) {
  return { ...props, users }
}

export default connect(mapStateToProps)(Login)