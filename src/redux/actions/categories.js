
import axios from "axios";
import { types } from "../types/types";
import { baseUrl } from "../../helpers/const";

export const startLoadingCategories = () => {
    
    return async (dispatch) => {
        dispatch(categoriesLoading());
        
        try {
            const { data } = await axios(`${ baseUrl }/propertyCategories`);
            dispatch(categoriesLoaded(data));
        } catch (error) {
            console.log(error);
        }
    };
};

const categoriesLoading = () => {
    return {
        type: types.categoriesLoading,
    };
}

const categoriesLoaded = (categories) => {
    return {
        type: types.categoriesLoaded,
        payload: categories,
    };
}