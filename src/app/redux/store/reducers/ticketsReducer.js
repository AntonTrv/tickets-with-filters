import initialState from '../initialState/index'
import * as actions from '../actionTypes/index'

const ticketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_TICKETS:
            return {...state, loading: true}
        case actions.FETCH_TICKETS_SUCCESS:
            return {...state, loading: false, tickets: action.payload}
        case actions.FETCH_TICKETS_ERROR:
            return {...state, loading: false, error: action.payload}
        case actions.SHOULD_REFRESH_TRUE:
            return {...state, shouldRefresh: true}
        case actions.SHOULD_REFRESH_FALSE:
            return {...state, shouldRefresh: false}
        case actions.CHANGE_CURRENCY:
            return {...state, loading: true}
        case actions.CHANGE_CURRENCY_SUCCESS:
            return {...state, loading: false, currency: {
                    currency: action.payload.newCurrency,
                    rate: action.payload.rate,
                    symbol: action.payload.symbol
                } }
        case actions.CHANGE_CURRENCY_ERROR:
            return {...state, loading: false, error: action.payload}
        case actions.UPDATE_FILTERS:
            return {...state, loading: true}
        case actions.UPDATE_FILTERS_SUCCESS:
            return {...state, loading: false, filters: action.payload}
        case actions.UPDATE_FILTERS_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state

    }
}

export default ticketsReducer

