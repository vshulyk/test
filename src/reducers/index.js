import { combineReducers } from 'redux';
import { GET_COMPANIES } from '../actions';

const defaultState = {
    flights: [],
    isPending: false,
    isLoaded: false,
    error: '',
};

const companyReducer = function companyReducer(state = defaultState, action) {
    switch (action.type) {
    case `${GET_COMPANIES}_FULFILLED`: {
        return Object.assign(
                {},
            {
                flights: action.payload.data.flights,
                isPending: false,
                isLoaded: true,
            },
            );
    }
    case `${GET_COMPANIES}_PENDING`: {
        return Object.assign(
                {},
                { isPending: true },
            );
    }
    case `${GET_COMPANIES}_REJECTED`: {
        return Object.assign(
                {},
            {
                isPending: false,
                error: action.payload.message,
            },
            );
    }
    default: {
        return state;
    }
    }
};

export default combineReducers({
    data: companyReducer,
});
