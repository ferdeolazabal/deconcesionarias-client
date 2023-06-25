// @ts-nocheck
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropertyValue from "../components/PropertyValue";

export const GetValues = () => {
  const navigate = useNavigate();
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
    // anexar la categoria
    const category = propertyCategories.find(
      (cat) => cat.id === property.property_category_FK
    );
    return {
      ...prop,
      category: category.name,
      property: property.name,
      value: prop.value || 0,
    };
  });

  const capitalize = (str = "") => {
    return str.charAt(0).toUpperCase() + str.slice(1);
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
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Categoria</th>
                  <th>Propiedad</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {values?.map((value) => (
                  <tr key={value.id}>
                    <td>{value.category}</td>
                    <td>{value.property}</td>
                    <td>
                      <PropertyValue
                        key={value.id}
                        id={value.id}
                        value={value.value}
                        sizeStar="medium"
                        disabled={true}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="d-flex justify-content-around">
          <button
            className="mb-5 btn btn-primary col-4 mx-auto"
            type="button"
            onClick={() => navigate("/")}
          >
            Volver
          </button>
          <button
            className="mb-5 btn btn-primary col-4 mx-auto"
            type="button"
            onClick={() => navigate("/PropertiesEdit")}
          >
            Editar Propiedades
          </button>
        </div>
      </div>
    </>
  );
};
