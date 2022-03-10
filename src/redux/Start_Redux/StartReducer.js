import { START_QUIZ } from "./StartType"

const initialState = {
    selected_quiz_value: '',
    question_array: []
}

const StartReducer = (state = initialState, action) => {

    /*
    console.log('Start Reducer Called')
    console.log('payload',action.payload)
    */
    switch(action.type){
        case START_QUIZ:
           /*
            console.log('selected_quiz', action.payload.selectedQuiz)
            console.log('question_array', action.payload.data[action.payload.selectedQuiz].questions)
            */

            return{
                ...state,
                selected_quiz_value: action.payload.selectedQuiz, 
                question_array: [...state.question_array, action.payload.data[action.payload.selectedQuiz].questions]
            }
        default: return state
    }
}

export default StartReducer