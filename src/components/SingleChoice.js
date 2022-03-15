import React, { useEffect, useRef } from 'react'
import action_single_choice from '../redux/SingleChoice_Redux/SingleChoiceAction'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const SingleChoice = (props) => {

  console.log(props.quest_options)



const radioWrapper = useRef()
  useEffect(
    () => {
      const findCheckedInput = radioWrapper.current.querySelector('input:checked')
      if(findCheckedInput){
        findCheckedInput.checked = false
      }
    },[props.quest_options]
  )



  const mthd_passed_selected_option = (event) => {


    let answer_object = {
      question_id: props.quest,
      answer_id: props.quest_answer,
      answer_given: event.target.value.toString(),
      answer_status: ''
    }


    console.log(answer_object)

    props._action_single_choice(
      'single_choice',
      (event.target.value.toString()),
      props.quest_answer,
      answer_object,
      '')
  }


  


  //console.log('single_answer_object',props.currentAnswerObject)
  console.log("QID",props.currentQuestion)
  console.log("Length",props.final_answer_array.length)
  console.log('final_answer_array', props.final_answer_array)
  console.log('option_on_select',props.final_answer_array[props.currentQuestion])
  

  return (
    <div className='container main-option-div' ref={radioWrapper}>
      {
        props.quest_options.map(
          (item,index) => {
            return(
              <div className='radio option-div' 
                key={index} 
                id={index}
                
                
                style={
                  {
                    backgroundColor: props.final_answer_array[props.currentQuestion] ? 
                    parseInt(props.final_answer_array[props.currentQuestion].answer_id) === index + 1 ? 'yellowgreen'
                    : parseInt(props.final_answer_array[props.currentQuestion].answer_given) === index ? 'pink'
                    : ''
                    : ''
                  }
                 
                }
                >
                <label>
                  <input 
                  type='radio' 
                  name='opt' 
                  value={index} 
                  onChange={mthd_passed_selected_option}
                  disabled={props.final_answer_array.length > 0 ? props.final_answer_array[props.currentQuestion] && true : false}
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

const mapStateToProps = state => {
  return{
    //currentAnswerObject: state.single.answer_object,
    final_answer_array: state.single.final_answer_array,
    currentQuestion: state.next.next_question_id
  }
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      _action_single_choice: action_single_choice
    },dispatch
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(SingleChoice)