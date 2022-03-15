import { ANSWER } from "./AnswerType"


const action_answer = (answer_object) => {
    return{
        type: ANSWER,
        payload: answer_object
    }
}

export default action_answer