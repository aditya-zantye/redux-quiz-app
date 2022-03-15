import { CLEAR_QUIZ, START_QUIZ } from "./StartType"

const initialState = {
    selected_quiz_value: '',
    question_array: [],
    total_questions : 0
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
                question_array: [...state.question_array, action.payload.data[action.payload.selectedQuiz].questions],
                total_questions: action.payload.data[action.payload.selectedQuiz].questions.length
            }
        case CLEAR_QUIZ:
            console.log("Entered Start Cleared")
            return {
                selected_quiz_value: '',
                question_array: [],
                total_questions : 0
            }
        default: return state
    }
}

export default StartReducer