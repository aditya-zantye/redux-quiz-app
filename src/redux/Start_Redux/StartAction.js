import { START_QUIZ } from "./StartType"


const action_start_quiz = (selectedQuiz, data) => {
    return{
        type: START_QUIZ,
        payload: {
            selectedQuiz: selectedQuiz,
            data: data
        }
    }
}

export default action_start_quiz