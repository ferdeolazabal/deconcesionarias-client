import { types } from "../types/types";

const initialState = {
    categories: [],
    // category: null,
};

export const categoriesReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.categoriesLoaded:
            return {
                ...state,
                categories: action.payload,
            };
        default:
            return state;
    }
}