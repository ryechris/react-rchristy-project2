import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { handleInitialData } from  '../actions/shared'
import { connect } from 'react-redux'
import Nav from './Nav'
import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import AddQuestion from './AddQuestion'
import Question from './Question'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <LoadingBar />
          <div className=''>
            <Nav />
            {this.props.loading === true
              ? null
              : <div>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route path='/questions/:id' component={Question} />
                  <Route path='/add' component={AddQuestion} />
                </div>}
          </div>
        </Fragment>
      </BrowserRouter>
    )
  }
}

function mapStateToProps ({ authedUser}) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
