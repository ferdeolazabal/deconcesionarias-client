import { types } from "../types/types";
// import Swal from "sweetalert2";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

export const startLoadingCategories = () => {
  return async (dispatch) => {
    dispatch(categoriesLoading());

    try {
      const { data } = await axios(`${baseUrl}/propertyCategories`);
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
};

const categoriesLoaded = (categories) => {
  return {
    type: types.categoriesLoaded,
    payload: categories,
  };
};
