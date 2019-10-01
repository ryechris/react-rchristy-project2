import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class AddQuestion extends Component {
  state = {
    question: '',
    a: '',
    b: ''
  }
   render() {
     const { question, a, b } = this.state

     return (
       <form>
         <h2>Would You Rather</h2>
         <h3>What are the Options?</h3>
         <label>-A-</label>
         <input
           id='a'
           name='a'
           value={a}
           onChange={this.handleInputChange}
           className='option'
           type='text'
         />
         <label>-B-</label>
         <input
           id='b'
           name='b'
           value={b}
           onChange={this.handleInputChange}
           className='option'
           type='text'
         />
       </form>
     )
   }
}

export default connect()(AddQuestion)
