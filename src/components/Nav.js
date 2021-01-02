import React from 'react'
import {connect} from 'react-redux'

const Nav = (props) => {

  return <div>{props.authedUserId}</div>

}

function mapStateToProps({authedUserId}, props) {
  return {...props, authedUserId}
}

export default connect(mapStateToProps)(Nav)