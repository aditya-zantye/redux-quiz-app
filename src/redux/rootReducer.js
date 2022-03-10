import { combineReducers } from "redux";
import StartReducer from "./Start_Redux/StartReducer";


const rootReducer = combineReducers(
    {
        start: StartReducer
    }
)

export default rootReducer