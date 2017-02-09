import { combineReducers } from 'redux';
import { GET_COMPANIES, FILTER_COMPANIES } from '../actions';

const defaultState = {
    flights: [],
    filterName: false,
    isPending: false,
    error: '',
};

const companyReducer = function companyReducer(state = defaultState, action) {
    switch (action.type) {
    case FILTER_COMPANIES: {
        return {
            ...state,
            filterName: action.payload,
        };
    }
    case `${GET_COMPANIES}_FULFILLED`: {
        const data = action.payload.data.flights;
        return {
            ...state,
            flights: data,
            isPending: false,
        };
    }
    case `${GET_COMPANIES}_PENDING`: {
        return {
            ...state,
            isPending: true,
        };
    }
    case `${GET_COMPANIES}_REJECTED`: {
        return {
            ...state,
            isPending: false,
            error: action.payload.message,
        };
    }
    default: {
        return state;
    }
    }
};

export default combineReducers({
    data: companyReducer,
});
