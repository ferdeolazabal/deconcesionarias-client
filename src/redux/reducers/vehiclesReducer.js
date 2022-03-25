import { types } from "../types/types";


const initialState = {
    vehicle: [],
    vehicles: [],
};


export const vehiclesReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.newVehicle:
            return {
                ...state,
                vehicle: action.payload,
            };
        case types.vehiclesLoaded:
            return {
                ...state,
                vehicles: action.payload,
            };
        default:
            return state;
    };
};