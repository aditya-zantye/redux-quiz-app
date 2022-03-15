import {CLEAR_ANSWER_OBJECT, CLEAR_CHOICE, PREVIOUS_CHOICE, SINGLE_CHOICE } from "./SingleChoiceType"


const initialState = {
    final_answer_array : []
}

const SingleChoiceReducer = (state = initialState, action) => {
    switch(action.type){
        case SINGLE_CHOICE:
            let ans_state = ''
            action.payload.given_answer = parseInt(action.payload.given_answer) + 1
            action.payload.actual_answer = parseInt(action.payload.actual_answer )
            action.payload.given_answer === action.payload.actual_answer 
            ? ans_state = 'correct'
            : ans_state = 'incorrect'


            action.payload.answer_object.answer_status = ans_state
            return{
                ...state,
               // answer_object: [...state.answer_object, action.payload.answer_object]
               //answer_object: action.payload.answer_object,

               final_answer_array: [...state.final_answer_array,action.payload.answer_object] 
            }

        case PREVIOUS_CHOICE:
            console.log("PREVaCTION",action.payload)
            return{
                ...state,
                final_answer_array: state.final_answer_array.slice(0,parseInt(action.payload))
            }

        case CLEAR_CHOICE:
            console.log("Entered Clear Choice")
            return{
                final_answer_array : []
            }

            /*
        case CLEAR_ANSWER_OBJECT:
            console.log("Called Clear..")
            return{
                ...state,
                answer_object: ' '
            }
            */
            


        default: return state
    }
}

export default SingleChoiceReducer