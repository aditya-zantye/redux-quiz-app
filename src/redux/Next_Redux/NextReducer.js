import action_single_choice from "../SingleChoice_Redux/SingleChoiceAction"
import { CLEAR_NEXT, NEXT, PREVIOUS } from "./NextType"

const initialState = {
    next_question_id: 0
}

const NextReducer = (state = initialState, action) => {
    switch(action.type){
        case NEXT:
            console.log("Next Reducer",action.payload)
            return{
                ...state,
                next_question_id: action.payload + 1
            }

        case CLEAR_NEXT:
            console.log("Entered Clear Next")
            return{
                next_question_id: 0
            }

        case PREVIOUS: 
            console.log("Previous reducer")
            return{
                ...state,
                next_question_id: action.payload - 1
            }

        default: return state
    }
}

export default NextReducer