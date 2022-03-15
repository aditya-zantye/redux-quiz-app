import React from 'react'
import data from '../data/data.json'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import action_finish from '../redux/Finish_Redux/FinishAction'
import action_next_question from '../redux/Next_Redux/NextAction'
import action_single_choice from '../redux/SingleChoice_Redux/SingleChoiceAction'
import action_start_quiz from '../redux/Start_Redux/StartAction'

const Finish = (props) => {

console.log("Question_array",props.question_array)
console.log("Final_Array",props.finalAnswerArray)
console.log("selectedQuiz",props.selected_quiz_value)
let total_questions = props.finalAnswerArray.length
let correct_answers = 0
let incorrect_answers = 0
let percentage = 0
let sr_no = 1

props.finalAnswerArray.map(
    (item) => {
        item.answer_status === 'correct'
        ? correct_answers++
            : item.answer_status === 'incorrect'
            ? incorrect_answers++
                :incorrect_answers++
    }
)

percentage = Math.round((correct_answers / total_questions) * 100,2)

const mthd_retake_quiz = () => {
    props._action_start_quiz('finish_quiz','','')
    props._action_single_choice('clear_choice','','','')
    props._action_next_question('clear_question','')
}

  return (
    <div className='newApp container-fluid'>
        <div className='container-fluid'>
        <h3>Final Score</h3>
        <table className='table table-responsive'>
          <tbody>
            <tr>
              <td>Quiz Name:</td>
              <td><b>{data[props.selected_quiz_value].name}</b></td>
            </tr>
            <tr>
              <td>Number of Questions:</td>
              <td><b>{total_questions}</b></td>
            </tr>
            <tr>
              <td>Correct Answers</td>
              <td><b>{correct_answers}</b></td>
            </tr>
            <tr>
              <td>Incorrect Answers:</td>
              <td><b>{incorrect_answers}</b></td>
            </tr>
            <tr>
              <td>Percentage:</td>
              <td><b>{percentage}%</b></td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr></hr>
     
      <div className='container-fluid'>
        <h3>Review Answers</h3>
        <table className='table table-responsive'>
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Question</th>
              <th>Anser Given</th>
              <th>Correct Answer</th>
              <th>Result</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                props.finalAnswerArray.map(
                    (item,index) => {
                        return(
                            <tr>
                            <td>{sr_no++}</td>
                            <td>{props.question_array[props.selected_quiz_value][index].name}</td>
                            <td>{props.question_array[props.selected_quiz_value][index].options[item.answer_given]}</td>
                            <td><b>{props.question_array[props.selected_quiz_value][index].options[item.answer_id-1]}</b></td>
                            <td><b>{item.answer_status.toUpperCase()}</b></td>
                            </tr>
                        )                        
                    }
                )
            }
          </tbody>
        </table>
      </div>
      
      <div className='container-fluid'>
          <Link to='/'>
            <button className='btn btn-info' id='restart_quiz' name='restart_quiz' onClick={mthd_retake_quiz}>Retake Quiz</button>
          </Link>
          
      </div>
      </div>
  )
}

const mapStateToProps = state => {
    return{
        finalAnswerArray : state.single.final_answer_array,
        selected_quiz_value: state.start.selected_quiz_value
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        _action_start_quiz: action_start_quiz,
        _action_single_choice: action_single_choice,
        _action_next_question: action_next_question
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Finish)