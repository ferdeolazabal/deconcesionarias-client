import { types } from "../types/types";
// import Swal from "sweetalert2";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;


export const valueCreate = ( id, value) => {

    return async (dispatch, getState) => {
        
        dispatch(valueCreateStart());
        const idVehicleNum = getState().vehicles.vehicle.vehicle.id
        const idVehicle = idVehicleNum.toString();

        try {
            
            const { data } = await axios.post(`${ baseUrl }/propertyValues`, {
                vehicle_FK         : idVehicle,
                vehicle_property_FK: id.toString(),
                value,
            });
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