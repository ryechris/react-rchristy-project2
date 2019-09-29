import React from 'react'
import { connect } from 'react-redux'

class Dashboard extends React.Component {
  state = {
    showAnswered: false
  }
  showAnswered = () => {
    this.setState(() => ({
      showAnswered: true
    }))
  }
  showUnanswered = () => {
    this.setState(() => ({
      showAnswered: false
    }))
  }

  render() {
    const { showAnswered } = this.state
    const { answeredQs, unansweredQs } = this.props

    const list = showAnswered === true ? answeredQs : unansweredQs

    return (
      <div>
        <div>
          <button
            style={{textDecoration: showAnswered === false ? 'underline' : 'none'}}
            onClick={this.showUnanswered}
          >Unanswered</button>
          <span>    </span>
          <button
            style={{textDecoration: showAnswered === true ? 'underline' : 'none'}}
            onClick={this.showAnswered}
          >Answered</button>
        </div>
        <ul>
          {list.map((q) => (
            <li key={q.id}>{q.id}</li>
          ))}
        </ul>
      </div>
    )
  }

}

function mapStateToProps({ authedUser, users, questions }) {
  console.log('Users[authedUser: ', questions)
  const answers = users[authedUser].answers

  const answeredQs = answers
    .map((id) => questions[id])
    .sort((a,b) => b.timestamp - a.timestamp)

  const unansweredQs = Object.keys(questions)
    .filter((id) => !answers.includes(id))
    .map((id) => questions[id])
    .sort((a,b) => b.timestamp - a.timestamp)

  return {
    answeredQs,
    unansweredQs
  }
}

export default connect(mapStateToProps)(Dashboard)