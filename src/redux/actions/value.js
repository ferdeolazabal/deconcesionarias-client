import { types } from "../types/types";
// import Swal from "sweetalert2";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;


export const valueCreate = ( event, value) => {

    return async (dispatch) => {
        dispatch(valueCreateStart());

        try {
            const { data } = await axios.post(`${ baseUrl }/values`, value);
            dispatch(valueCreated(data));
        } catch (error) {
            console.log(error);
        }
    };
};

const valueCreateStart = () => {
    return {
        type: types.valueCreate,
    };
};

const valueCreated = ( data ) => {
    return {
        type: types.valueCreated,
        payload: data,
    };
}