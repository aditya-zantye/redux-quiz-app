import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../data/data.json'
import { bindActionCreators } from 'redux';
import action_start_quiz from '../redux/Start_Redux/StartAction'
import {connect} from 'react-redux' 

const Start = (props) => {
  
  console.log("json_data",data)

  const [selectedQuiz, setSelectedQuiz] = useState('')

  const mthd_select_quiz = (event) => {
    if(event.target.value === '' )
    {
      alert("Quiz selection is mandatory")
      return
    }
    setSelectedQuiz(event.target.value)
    //console.log('selectedQuiz '+selectedQuiz)
  }

  const mthd_start_quiz = () => {
    props._action_start_quiz('start_quiz',selectedQuiz,data)
  }
 

  return (
    <div className='card'>
      <div className='card-content'>
        <div className='content'>
          <h1>Quiz App</h1>
          <div className='row'>
            <div className='col-md-3'></div>
            <div className='col-md-6'>
            <select name='quiz_name' id='quiz_name' className='form-control' onChange={mthd_select_quiz}>
                <option key='' value=''>Select Quiz</option>
                {
                  data.map(
                    (item,index) => {
                      return(<option key={index} value={index}>{item.name}</option>)
                    }
                  )
                }
            </select>
            </div>
            <div className='col-md-3'></div>
          </div>
          <br/>
          <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
              <Link to='/question-list'>
                <button className='btn btn-primary' onClick={mthd_start_quiz}>Start</button>
              </Link>
            </div>
            <div className='col-md-4'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    _action_start_quiz: action_start_quiz
  },dispatch)
}

export default connect(null,mapDispatchToProps)(Start)