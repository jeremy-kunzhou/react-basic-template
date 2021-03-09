import * as ActionTypes from './ActionTypes';

const init_state = {
    is_loading: false,
    error: null,
    countries: [],
    region: 'all'
}

export const Countries = (state = init_state, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_COUNTRIES:
            return {
                ...state,
                is_loading: false,
                countries: action.payload.data,
                region: action.payload.region,
            }

        case ActionTypes.LOAD_COUNTRIES_ERROR:
            return {
                ...state,
                is_loading: false,
                countries: [],
                region: 'all',
                error: action.payload
            }

        case ActionTypes.LOADING_COUNTRIES:
            return {
                ...state,
                is_loading: true,
                error: null,
            }
    
        default:
            return state;
    }
}