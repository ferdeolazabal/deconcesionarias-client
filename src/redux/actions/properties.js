import axios from "axios";
import { types } from "../types/types";

const baseUrl = process.env.REACT_APP_API_URL;


export const startLoadingProperties = () => {
    
    return async (dispatch) => {
        dispatch(propertiesLoading());

        try {
            
            const response = await axios(`${ baseUrl }/vehicleProperty`);
            const { data } = await response
            dispatch(propertiesLoaded(data));
        
        } catch (error) {
            console.log(error);
        }
    };
};

const propertiesLoading = () => {
    return {
        type: types.propertyLoading,
    };
};

const propertiesLoaded = ( data ) => {
    return {
        type: types.propertyLoaded,
        payload: data,
    };
};