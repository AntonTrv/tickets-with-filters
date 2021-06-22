import * as ticketActionCreators from './ticketsActionCreators'
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";

const ActionCreators = {
    ...ticketActionCreators
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch); //redux method takes in a list of action creators, binds them to be used as a dispatcher
}