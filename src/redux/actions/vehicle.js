import { types } from "../types/types";
import Swal from "sweetalert2";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

export const startNewVehicle = (data) => {
  return async (dispatch) => {
    dispatch(newVehicleStart());
    try {
      const response = await axios.post(`${baseUrl}/vehicles/`, data);
      dispatch({
        type: types.newVehicle,
        payload: response.data,
      });

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 7000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Vehiculo precargado con exito, Ingrese valores para actualizar",
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const newVehicleStart = () => {
  return {
    type: types.newVehicleStart,
  };
};

export const startLoadingVehicles = () => {
  return async (dispatch) => {
    dispatch(vehiclesLoading());

    try {
      const { data } = await axios.get(`${baseUrl}/vehicles`);
      dispatch(vehiclesLoaded(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const vehiclesLoading = () => {
  return {
    type: types.vehiclesLoading,
  };
};

const vehiclesLoaded = (data) => {
  return {
    type: types.vehiclesLoaded,
    payload: data,
  };
};

export const getVehicleById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${baseUrl}/vehicles/${id}`);
      dispatch(vehicleLoadedById(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const vehicleLoadedById = (data) => {
  return {
    type: types.vehicleLoadedById,
    payload: data,
  };
};

export const getValuesByVehicleId = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${baseUrl}/vehicles/vehicleValues/${id}`
      );
      console.log({ data }, "getValuesByVehicleId");
      dispatch(valuesLoadedByVehicleId(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const valuesLoadedByVehicleId = (data) => {
  return {
    type: types.valuesLoadedByVehicleId,
    payload: data,
  };
};

export const startDeleteVehicle = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${baseUrl}/vehicles/${id}`);
      dispatch(vehicleDeleted(id));
      dispatch(startLoadingVehicles());

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Vehiculo eliminado con exito!",
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const vehicleDeleted = (id) => {
  return {
    type: types.VehicleDeleted,
    payload: id,
  };
};
