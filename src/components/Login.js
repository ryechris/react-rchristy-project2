import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  state = {
    authedUser: ''
  }

  handleInputChange = (e) => {
    const { value } = e.target
    this.setState(() => ({
      authedUser: value
    }))
  }

  login = (e) => {
    e.preventDefault()
    this.props.history.push('/')
    this.props.dispatch(setAuthedUser(this.state.authedUser))
  }

  render() {
    const { authedUser } = this.props
    // https://reactraining.com/react-router/web/example/auth-workflow
    // https://tylermcginnis.com/react-router-protected-routes-authentication/
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    if (authedUser) {
      return (
        <Redirect to={from} />
      )
    }
    return (
      <div>
        <label htmlFor='user-select'>Please select a user and log in.</label>
        <select id='user-select' onChange={this.handleInputChange}>
          <option value=''>--select a user--</option>
          {Object.keys(this.props.users).map((id) => {
            const nm = this.props.users[id].name.split(' ')
            return (
              <option key={id} value={id}>{nm[0]} {nm[1]}</option>
            )
          })}
        </select>
        <button onClick={this.login}>Log In</button>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(Login)
