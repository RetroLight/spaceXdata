import {
    FETCH_LAUNCHES_START,
    FETCH_LAUNCHES_SUCCESS,
    FETCH_LAUNCHES_FAILURE,
    DATE_START_FILTER
} from "../actionTypes";

export const INITIAL_STATE = {
    launchesArr: [],
    filters: {newDateStart: true},
    isFetching: false,
    error: undefined
}

export const launchesReducer = (state, action) => {
    switch(action.type) {
        case FETCH_LAUNCHES_START:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_LAUNCHES_SUCCESS:
            return {
                ...state,
                launchesArr: action.payload.launchesArr,
                filters: {newDateStart: true},
                isFetching: false
            }
        case FETCH_LAUNCHES_FAILURE:
            return {
                ...state,
                isFetching: false,
                launchesArr: [],
                error: action.payload.error
            }
        case DATE_START_FILTER: {
            return {
                ...state,
                launchesArr: [...state.launchesArr].reverse(),
                filters: {newDateStart: !state.filters.newDateStart}
            }
        }
        default: return state
    }
}
