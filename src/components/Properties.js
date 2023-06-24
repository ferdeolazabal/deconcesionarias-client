// @ts-nocheck
import React from "react";
import { useSelector } from "react-redux";
import PropertyValue from "./PropertyValue";
import { TabPanel } from "../helpers/TabPanel";
import { useNavigate } from "react-router-dom";

export const Properties = ({ property }) => {
  console.log("Properties props", property);
  // @ts-ignore
  const { getVehicleProperty } = useSelector(
    ({ property }) => property.properties
  );
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="property-div">
      <div className="">
        <TabPanel value={property} index={property}>
          {getVehicleProperty &&
            getVehicleProperty
              .filter((i) => i.property_category_FK === property + 1)
              .map((property) => (
                <div className="" key={property.id}>
                  <PropertyValue
                    id={property.id}
                    name={property.name}
                    value={property.value}
                  />
                </div>
              ))}
        </TabPanel>

        <div className="fixed-bottom">
          <div className="d-grid gap-2 col-5 mx-auto">
            <button
              className="mb-5 btn btn-lg btn-block btn-primary"
              type="button"
              onClick={handleSubmit}
            >
              Finalizar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
