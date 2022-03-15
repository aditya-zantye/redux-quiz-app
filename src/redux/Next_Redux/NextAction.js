import { CLEAR_NEXT, NEXT, PREVIOUS } from "./NextType"


const action_next_question = (key,next_question_id) => {
    
    switch(key){
        case 'next_question':
            return{
                type: NEXT,
                payload: next_question_id
            }

        case 'previous_question':
            return{
                type: PREVIOUS,
                payload: next_question_id
            }

        case 'clear_question':
            return{
                type: CLEAR_NEXT
            }

        default: return{
            type: CLEAR_NEXT
        }
    }
    
    
}

export default action_next_question