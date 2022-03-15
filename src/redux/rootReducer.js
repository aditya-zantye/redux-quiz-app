import { combineReducers } from "redux";
import AnswerReducer from "./Answers_Redux/AnswerReducer";
import FinishReducer from "./Finish_Redux/FinishReducer";
import NextReducer from "./Next_Redux/NextReducer";
import SingleChoiceReducer from "./SingleChoice_Redux/SingleChoiceReducer";
import StartReducer from "./Start_Redux/StartReducer";


const rootReducer = combineReducers(
    {
        start: StartReducer,
        single: SingleChoiceReducer,
        next: NextReducer,
        finish: FinishReducer
        //final: AnswerReducer
    }
)

export default rootReducer