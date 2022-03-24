import { types } from "../types/types";

const initialState = {
    value: [],
};

export const valueReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.updateValue:
            return {
                ...state,
                value: action.payload,
            };
        case types.uiCloseModal:
            return {
                ...state,
                modalOpen: false,
            };
        default:
            return state;
    }
}