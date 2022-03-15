import { ANSWER } from "./AnswerType"



const initialState = {
    final_answer_object : []
}


const AnswerReducer = (state = initialState, action) => {
   
    switch(action.type){
        case ANSWER:
            return{
                ...state,
                final_answer_object: [...state.final_answer_object,action.payload]
            }
        default: return state
    }
}

export default AnswerReducer