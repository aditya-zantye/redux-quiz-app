import React, { useState } from 'react'
import SingleChoice from './SingleChoice'
import MultipleChoice from './MultipleChoice'

const Question_List = (props) => {

  console.log('questions',props.question_array)

  const choice_array = ["single_choice","multi_choice"]
  const [currentQuestion, setCurrentQuestion] = useState(0)

  return (
    <div className='card'>
      <div className='card-content'>
        <div className='content'>
          <h2>{props.question_array[0][currentQuestion].name}</h2>
          {
            props.question_array[0][currentQuestion].type === choice_array[0] ? (
              <SingleChoice question_index={currentQuestion} question={}/>):(<MultipleChoice />)
          }
        </div>
      </div>
    </div>
  )
}

export default Question_List