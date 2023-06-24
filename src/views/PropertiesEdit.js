// @ts-nocheck
import React from "react";
import { NavBar } from "../components/NavBar";
import { PropertiesHelper } from "../helpers/propertiesHelper";

const PropertiesEdit = () => {
  return (
    <div className="container">
      <NavBar />
      <h1 className="mt-4 mb-4">Formulario de Inspección</h1>
      <hr />
      <div className="row mt-4">
        <div className="col-5 mt-3">
          <h4>Propiedades</h4>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <table className="table table-striped">
            <PropertiesHelper />
          </table>
        </div>
      </div>
    </div>
  );
};

export default PropertiesEdit;
