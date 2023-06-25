// @ts-nocheck
import { types } from "../types/types";

const initialState = {
  vehicle: [],
  vehicles: [],
  valuesLoadedByVehicleId: [],
};

export const vehiclesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.newVehicle:
      return {
        ...state,
        vehicle: action.payload,
      };
    case types.vehiclesLoaded:
      return {
        ...state,
        vehicles: action.payload,
      };
    case types.vehicleDeleted:
      return {
        ...state,
        vehicles: state.vehicles.filter(
          // @ts-ignore
          (vehicle) => vehicle.id !== action.payload
        ),
      };
    case types.vehicleLoadedById:
      return {
        ...state,
        vehicle: action.payload,
      };

    case types.valuesLoadedByVehicleId:
      return {
        ...state,
        valuesLoadedByVehicleId: action.payload,
      };

    case types.valueUpdated:
      const updatedVehicleProperty = state.vehicle.vehicle.properties.find(
        (prop) =>
          prop.vehicle_property_FK ===
          action.payload.updatedValue.vehicle_property_FK
      );
      updatedVehicleProperty.value = action.payload.updatedValue.value;
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          vehicle: {
            ...state.vehicle.vehicle,
            properties: [
              ...state.vehicle.vehicle.properties.filter(
                (prop) =>
                  prop.vehicle_property_FK !==
                  action.payload.updatedValue.vehicle_property_FK
              ),
              updatedVehicleProperty,
            ],
          },
        },
      };

    default:
      return state;
  }
};
