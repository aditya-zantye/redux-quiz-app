import React, { useState } from 'react'
import SingleChoice from './SingleChoice'
import MultipleChoice from './MultipleChoice'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import action_next_question from '../redux/Next_Redux/NextAction'
import action_answer from '../redux/Answers_Redux/AnswerAction'
//import action_clear_answer_object from '../redux/SingleChoice_Redux/SingleChoiceAction'
import store from '../redux/store'
import { Link } from 'react-router-dom'
import action_single_choice from '../redux/SingleChoice_Redux/SingleChoiceAction'


const Question_List = (props) => {

  console.log('questions',props.question_array)
  console.log('Q_Length',props.totalQuestions)

  const choice_array = ["single_choice","multi_choice"]

  console.log(props.currentQuestion)

  const mthd_next_question = () => {
    props._action_next_question('next_question',props.currentQuestion)
    //props._action_answer(props.currentAnswerObject)
    //props._action_clear_answer_object()
  }

  const mthd_previous_question = () => {
    props._action_next_question('previous_question',props.currentQuestion)
    props._action_single_choice('previous_choice','','','',props.currentQuestion-1)
  }


  console.log("final_answer_object",props.finalAnswerObject)

  console.log("store_data",store.getState())
  console.log("props.currentAnswerObject",props.currentAnswerObject)

 /*
if(props.currentAnswerObject !== '')
{
  store.getState().single.answer_object = ''
}
*/
 
  return (
    <div className='card'>
      <div className='card-content'>
        <div className='content'>
          <h2>{props.question_array[props.selected_quiz_value][props.currentQuestion].name}</h2>
          {
            props.question_array[props.selected_quiz_value][props.currentQuestion].type === choice_array[props.selected_quiz_value] ? (
              <SingleChoice 
                quest_options={props.question_array[props.selected_quiz_value][props.currentQuestion].options} 
                quest_answer={props.question_array[props.selected_quiz_value][props.currentQuestion].answer}
                quest={props.question_array[props.selected_quiz_value][props.currentQuestion].id}
                currentQuestion={props.currentQuestion}
              />)
              :(<MultipleChoice 
                quest_options={props.question_array[props.selected_quiz_value][props.currentQuestion].options} 
                quest_answer={props.question_array[props.selected_quiz_value][props.currentQuestion].answer}
                quest={props.question_array[props.selected_quiz_value][props.currentQuestion].id}
                currentQuestion={props.currentQuestion}/>)
          }
          <br></br>
          {
            props.currentQuestion === (props.totalQuestions - 1) 
            ? <>
              <button 
              className='btn btn-warning'
              onClick={mthd_previous_question}>
                Previous
              </button>

              <Link to='/finish'>
                <button 
                className='btn btn-success next-button'
                disabled={props.final_answer_array[props.currentQuestion] ? false : true}>
                  Finish
                </button>
              </Link>
              </> 
            : 
              <>
                {
                  props.currentQuestion > 0 
                  ? <button 
                    className='btn btn-warning'
                    onClick={mthd_previous_question}>
                      Previous
                    </button> 
                  : <></>
                }


                <button 
                className='btn btn-primary next-button' 
                onClick={mthd_next_question}
                disabled={props.final_answer_array[props.currentQuestion] ? false : true}>
                  Next
                </button>
              </>
              
          }


          
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    currentQuestion: state.next.next_question_id,
    totalQuestions: state.start.total_questions,
    selected_quiz_value: state.start.selected_quiz_value,
    final_answer_array: state.single.final_answer_array,
    //currentAnswerObject: state.single.answer_object,
    //finalAnswerObject: state.final.final_answer_object
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      _action_next_question: action_next_question,
      _action_single_choice: action_single_choice
      //_action_answer: action_answer
     // _action_clear_answer_object: action_clear_answer_object
    },dispatch
  )
}

export default  connect(mapStateToProps,mapDispatchToProps)(Question_List)


/*

 {
      "id": 9,
      "name": "Cities of India?",
      "type": "multi_choice",
      "options":[
        "Delhi",
        "NY",
        "Melbourne",
        "Mumbai"
      ],
      "answer": [1,4],
      "explanation": "Cities is the explanation"
    },

*/