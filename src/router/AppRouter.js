// @ts-nocheck
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GetValues } from "../views/GetValues";
import { Home } from "../views/Home";
import { SetValueScreen } from "../views/SetValueScreen";
import { startLoadingCategories } from "../redux/actions/categories.js";
import { startLoadingProperties } from "../redux/actions/properties.js";
import { startLoadingVehicles } from "../redux/actions/vehicle";
import { useDispatch } from "react-redux";
import PropertiesEdit from "../views/PropertiesEdit";

export const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingVehicles());
    dispatch(startLoadingCategories());
    dispatch(startLoadingProperties());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="inspection" element={<SetValueScreen />} />

        <Route path="PropertiesEdit" element={<PropertiesEdit />} />

        <Route path="vehicle/:id" element={<GetValues />} />

        <Route path="/" element={<Home />} />

        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
