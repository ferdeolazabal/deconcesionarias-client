import axios from "axios";
import { types } from "../types/types";

const baseUrl = process.env.REACT_APP_API_URL;

export const valueCreate = (vehiclePropertyId, value) => {
  return async (dispatch, getState) => {
    const vehicleId = getState().vehicles.vehicle.vehicle.id;
    const vehicle_FK = vehicleId.toString();
    const vehicle_property_FK = vehiclePropertyId.toString();
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

export const startEditValues = (propertyId, body) => {
  return async (dispatch, getState) => {
    const vehicleId = getState().vehicles.vehicle.vehicle.id;
    try {
      const { data } = await axios.put(
        `${baseUrl}/propertyValues/${vehicleId}`,
        { body }
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
