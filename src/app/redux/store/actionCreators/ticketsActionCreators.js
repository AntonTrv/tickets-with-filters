import axios from "axios";
import * as actionTypes from '../actionTypes/index'
import {UPDATE_FILTERS_SUCCESS} from "../actionTypes/index";

const API_KEY = process.env.API_KEY

//fetch Tickets

export const fetchTickets = (filters=[]) => {

    return async (dispatch) => {
        try {
            dispatch({type: actionTypes.FETCH_TICKETS})
            const response = await axios.get('http://localhost:5000/tickets')

            if(filters.length > 0) {
                dispatch({type: actionTypes.FETCH_TICKETS_SUCCESS, payload: response.data.filter(d => filters.includes(d.stops))})
                return
            }
            dispatch({type: actionTypes.FETCH_TICKETS_SUCCESS, payload: response.data})
        } catch (err) {
            dispatch({
                type: actionTypes.FETCH_TICKETS_ERROR,
                payload: err.message
            })
        }
    }
}

export const changeCurrency = (newCurrency) => {

    const currencySymbols = {
        RUB: '₽',
        EUR: '€',
        USD: '$'
    }
    return async (dispatch) => {
        try {

            dispatch({type: actionTypes.CHANGE_CURRENCY})
            const response = await axios.get(`http://data.fixer.io/api/latest?access_key=1bdeed564bbccbb3fc7a728f8584d419`).then(res => Math.ceil(res.data.rates[newCurrency]))
            dispatch({
                type: actionTypes.CHANGE_CURRENCY_SUCCESS, payload: {
                    newCurrency,
                    rate: response,
                    symbol: currencySymbols[newCurrency]
                }
            })
        } catch (err) {
            dispatch({
                type: actionTypes.CHANGE_CURRENCY_ERROR,
                payload: err.message
            })
        }
    }
}

export const updateFilters = (filters) => {
    return async (dispatch) => {
        try {

            if (filters.length > 0) {

                dispatch({type: actionTypes.UPDATE_FILTERS})

                let filter = []
                filters.map(f => f.isChecked ? filter.push(+f.value) : null)

                dispatch({type: actionTypes.UPDATE_FILTERS_SUCCESS, payload: filter})
            }


        } catch (err) {
            dispatch({
                type: actionTypes.UPDATE_FILTERS_ERROR,
                payload: err.message
            })
        }
    }
}
