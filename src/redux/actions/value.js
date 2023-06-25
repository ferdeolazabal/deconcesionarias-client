import axios from "axios";
import Swal from "sweetalert2";
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

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Valor actualizado con exito",
      });
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
