import {CLEAR_CHOICE, MULTIPLE_CHOICE, PREVIOUS_CHOICE, SINGLE_CHOICE } from "./SingleChoiceType"


const action_single_choice = (key,given_answer,actual_answer,answer_object,temp_curr_qid) => {
    
    switch(key)
    {
        case 'single_choice':
            return{
                type: SINGLE_CHOICE,
                payload:{
                    given_answer: given_answer,
                    actual_answer: actual_answer,
                    answer_object: answer_object
                }
            }

        case 'previous_choice':
            {
                console.log("PREV_ACTION",temp_curr_qid)
                let prev_qid = parseInt(temp_curr_qid)
                return{
                    type: PREVIOUS_CHOICE,
                    payload: prev_qid
                }
            }
        
        case 'clear_choice':
            return{
                type: CLEAR_CHOICE
            }

        default: return{
            type: CLEAR_CHOICE
        }
    }    
}

export default (action_single_choice)