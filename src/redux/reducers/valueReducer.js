import { types } from "../types/types";

const initialState = {
    values: [],
};

export const valueReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.valueCreated:
            return {
                ...state,
                values: [ ...action.payload ],
            };
        default:
            return state;
    }
}