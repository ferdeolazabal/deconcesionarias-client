// @ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropertyValue from "../components/PropertyValue";
import { startEditValues } from "../redux/actions/value";

export const GetValues = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(true);
  const { vehicle } = useSelector(({ vehicles }) => vehicles.vehicle);

  const { getVehicleProperty } = useSelector(
    ({ property }) => property.properties
  );
  const { propertyCategories } = useSelector(
    ({ categories }) => categories.categories
  );

  const values = vehicle?.properties?.map((prop) => {
    const property = getVehicleProperty.find(
      (cat) => cat.id === prop.vehicle_property_FK
    );

    const category = propertyCategories.find(
      (cat) => cat.id === property.property_category_FK
    );
    return {
      vehicleId: vehicle.id,
      categoryId: category.id,
      propertyId: property.id,
      categoryName: category.name,
      propertyName: property.name,
      propertyValue: prop.value || 0,
    };
  });

  const capitalize = (str = "") => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const updateValue = (propertyId, newValue) => {
    const body = {
      propertyCategory_FK: propertyId,
      propertyValue: newValue,
    };
    dispatch(startEditValues(propertyId, body));
  };

  return (
    <>
      <div className="container">
        <h3 className="mt-4 mb-4">
          {capitalize(vehicle?.brand)} {capitalize(vehicle?.model)}{" "}
          {vehicle?.year}
          <br />
        </h3>

        <div className="row">
          <div className="col-12">
            <table className="table table-striped table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Categoria</th>
                  <th>Propiedad</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {values?.map(
                  ({
                    categoryName,
                    propertyName,
                    propertyValue,
                    propertyId,
                  }) => (
                    <tr key={propertyId}>
                      <td>{categoryName}</td>
                      <td>{propertyName}</td>
                      <td>
                        <PropertyValue
                          key={propertyId}
                          id={propertyId}
                          value={propertyValue}
                          sizeStar="medium"
                          disabled={edit}
                          onChange={(propertyId, newValue) =>
                            updateValue(propertyId, newValue)
                          }
                        />
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="d-flex justify-content-around">
          <button
            className="mb-5 btn btn-primary col-3 mx-auto"
            type="button"
            onClick={() => navigate("/")}
          >
            Volver
          </button>
          <button
            className="mb-5 btn btn-primary col-3 mx-auto"
            type="button"
            onClick={() => setEdit(!edit)}
          >
            Editar Valores
          </button>
        </div>
      </div>
    </>
  );
};
