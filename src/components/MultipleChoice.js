import React, { useState } from 'react'

const MultipleChoice = (props) => {

  console.log(props.quest_options)

 const checkedAnswer = []

  const mthd_passed_selected_option = (event) => {


    let answer_array =  props.quest_answer
    if(answer_array.length !== checkedAnswer.length){
      checkedAnswer.push(parseInt(event.target.value))
    }

    console.log("checkedAnswer",checkedAnswer)

    let answer_object = {
      question_id: props.quest,
      answer_id: props.quest_answer,
      answer_given: checkedAnswer,
      answer_status: ''
    }


    console.log(answer_object)

    /*
    props._action_single_choice(
      (event.target.value.toString()),
      props.quest_answer,
      answer_object)
      */
  }

  console.log('multiple_answer_object',props.currentAnswerObject)

  return (
    <div className='container main-option-div'>
      {
        props.quest_options.map(
          (item,index) => {
            return(
              <div className='radio option-div' 
                key={index} 
                id={index}
              >
                <label>
                  <input 
                  type='checkbox' 
                  name='opt' 
                  value={index} 
                  onChange={mthd_passed_selected_option}
                  />
                  <div className='actual-option-div'>{item}</div>
                </label>
              </div>
            )
          }
        )
      }
    </div>
  )
}

export default MultipleChoice