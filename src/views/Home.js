import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { VehiclesList } from "../components/VehiclesList";
import { useForm } from "../hooks/useform";

import {
  startLoadingVehicles,
  startNewVehicle,
} from "../redux/actions/vehicle.js";

export const Home = () => {
  // @ts-ignore
  const vehicle = useSelector((state) => state.vehicles.vehicles);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formValues, handleInputChange] = useForm({
    brand: "Ford",
    model: "A",
    year: "1930",
  });
  const { brand, model, year } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startNewVehicle(formValues));
    navigate("/inspection");
  };

  const [submitButton, setSubmitButton] = useState(true);

  useEffect(() => {
    brand && model && year ? setSubmitButton(false) : setSubmitButton(true);
  }, [brand, model, year]);

  useEffect(() => {
    dispatch(startLoadingVehicles());
  }, [dispatch]);

  return (
    <div className="home container">
      <NavBar />

      <div>
        <h1 className="mt-4 mb-4">Formulario de Inspección</h1>
      </div>
      <hr />

      <div className="row mt-4 mb-4">
        <div className="col-5 mt-3 mb-3">
          <h4>Ingresar Vehiculo </h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className={`form-control mb-2 ${
                brand.length > 1 ? "is-valid" : ""
              }`}
              placeholder="Marca"
              name="brand"
              // @ts-ignore
              onChange={handleInputChange}
              value={brand}
              autoComplete="off"
              id="brand"
            />
            <input
              type="text"
              className={`form-control mb-2 ${
                model.length > 0 ? "is-valid" : ""
              }`}
              placeholder="Modelo"
              name="model"
              // @ts-ignore
              onChange={handleInputChange}
              value={model}
              autoComplete="off"
              id="model"
            />
            <input
              type="text"
              className={`form-control mb-2 ${year > 1 ? "is-valid" : ""}`}
              placeholder="Año"
              name="year"
              // @ts-ignore
              onChange={handleInputChange}
              value={year}
              autoComplete="off"
              id="year"
            />
            <button
              type="submit"
              disabled={submitButton}
              className="btn mt-2 btn btn-lg btn-primary btn-block form-control"
            >
              Ingresar
            </button>
          </form>
        </div>

        <div className="col-7 mt-3 mb-3">
          <h4>Vehiculos Ingresados</h4>
          <hr />
          <ul className="list-group">
            {(vehicle && vehicle.length === 0) || vehicle.count === 0 ? (
              <div className="alert alert-info">
                No hay Vehiculos Ingresados. . .
              </div>
            ) : (
              <VehiclesList />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
