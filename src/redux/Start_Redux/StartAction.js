import { CLEAR_QUIZ, START_QUIZ } from "./StartType"


const action_start_quiz = (key,selectedQuiz, data) => {
    
    switch(key){
        case 'start_quiz':
            return{
                type: START_QUIZ,
                payload: {
                    selectedQuiz: selectedQuiz,
                    data: data
                }
            }
        case 'finish_quiz':
            return{
                type: CLEAR_QUIZ
            }
        default: return {
            type: CLEAR_QUIZ
        }
    }   
}

export default action_start_quiz