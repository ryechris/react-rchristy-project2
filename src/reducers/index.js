import authedUser from './authedUaser'
import users from './users'
import questions from './questions'
import { combineReducers } from 'redux'

export default combineReducers({
  authedUser,
  users,
  questions
})
