import ticketsReducer from './ticketsReducer'
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    tickets: ticketsReducer
})

