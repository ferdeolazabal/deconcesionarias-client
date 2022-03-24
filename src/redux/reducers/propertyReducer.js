import { types } from '../types/types';

const initialState = {
    properties: [],
    // property: null,
};

export const propertyReducer = ( state = initialState, action ) => {
    
switch ( action.type ) {
    case types.propertyLoad:
        return {
            ...state,
            properties: 'loading..',
        };
    case types.propertyLoaded:
        return {
            ...state,
            properties: action.payload,
        };
    default:
        return state;
}
}

