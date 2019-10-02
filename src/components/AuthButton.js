import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class AuthButton extends Component {

  signout = (e) => {
    e.preventDefault()
    this.props.dispatch(setAuthedUser(''))
    return <Redirect to={{ pathname: '/' }}>
  }

  render() {
    return (
      <button onClick={this.signout} >Sign Out</button>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(AuthButton)
