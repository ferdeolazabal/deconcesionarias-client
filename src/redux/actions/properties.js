import axios from "axios";
import { types } from "../types/types";

const baseUrl = process.env.REACT_APP_HOST;


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

export const startDeleteProperty = ( idProperty ) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`${ baseUrl }/vehicleProperty/${ idProperty }`);
            const { data } = await response;
            dispatch(propertyDeleted(data));
            dispatch(startLoadingProperties());
        } catch (error) {
            console.log(error);
        }
    };
};

const propertyDeleted = ( data ) => {
    return {
        type: types.PropertyDeleted,
        payload: data,
    };
}