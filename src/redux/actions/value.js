import { types } from "../types/types";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

export const valueCreate = (id, value) => {
  return async (dispatch, getState) => {
    const idVehicleNum = getState().vehicles.vehicle.vehicle.id;
    const vehicle_FK = idVehicleNum.toString();
    const vehicle_property_FK = id.toString();
    try {
      const { data } = await axios.post(`${baseUrl}/propertyValues`, {
        vehicle_FK,
        vehicle_property_FK,
        value,
      });
      dispatch(valueCreated(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const valueCreated = (data) => {
  return {
    type: types.valueCreated,
    payload: data,
  };
};

export const startEditValues = (idVehicle, value) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(
        `${baseUrl}/propertyValues/${idVehicle}`,
        {
          value,
        }
      );
      dispatch(valueUpdated(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const valueUpdated = (data) => {
  return {
    type: types.valueUpdated,
    payload: data,
  };
};
