import { FINISH } from "./FinishType"


const initialState = {
    selected_quiz_value: '',
    question_array: [],
    total_questions : 0,
    final_answer_array : [],
    next_question_id: 0
}

const FinishReducer = (state = initialState, action) => {
    switch(action.type){
        case FINISH:
            
        default: return state 
    }
}

export default FinishReducer