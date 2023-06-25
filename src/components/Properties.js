// @ts-nocheck
import React from "react";
import { TabPanel } from "../helpers/TabPanel";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropertyValue from "./PropertyValue";

export const Properties = ({ property }) => {
  const navigate = useNavigate();
  const { getVehicleProperty } = useSelector(
    ({ property }) => property.properties
  );

  return (
    <div className="property-div">
      <div className="">
        <TabPanel value={property} index={property}>
          {getVehicleProperty
            ?.filter((i) => i.property_category_FK === property + 1)
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
