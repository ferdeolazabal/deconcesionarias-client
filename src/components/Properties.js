// @ts-nocheck
import React from "react";
import { TabPanel } from "../helpers/TabPanel";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { valueCreate } from "../redux/actions/value";
import PropertyValue from "./PropertyValue";

export const Properties = ({ property }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { getVehicleProperty } = useSelector(
    ({ property }) => property.properties
  );

  const updateValue = (vehiclePropertyId, newValue) => {
    dispatch(valueCreate(vehiclePropertyId, newValue));
  };

  return (
    <div className="property-div">
      <div className="">
        <TabPanel value={property} index={property}>
          {getVehicleProperty
            ?.filter((i) => i.property_category_FK === property + 1)
            .map(({ id, name, value }) => (
              <PropertyValue
                id={id}
                key={id}
                name={name}
                value={value}
                onChange={updateValue}
              />
            ))}
        </TabPanel>

        <div className="fixed-bottom">
          <div className="d-grid gap-2 col-5 mx-auto">
            <button
              className="mb-5 btn btn-lg btn-block btn-primary"
              type="button"
              onClick={() => navigate("/")}
            >
              Finalizar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
