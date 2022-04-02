import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    BrowserRouter,
    Routes,
    Route,
    } from "react-router-dom";

import { Home } from            "../views/Home";
import { SetValueScreen } from "../views/SetValueScreen";
import PropertiesEdit from     "../views/PropertiesEdit";
import { startLoadingCategories } from "../redux/actions/categories.js";
import { startLoadingProperties } from "../redux/actions/properties.js";
import { startLoadingVehicles } from "../redux/actions/vehicle";
import { GetValues } from "../views/GetValues";


export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(startLoadingVehicles());
        dispatch(startLoadingCategories());
        dispatch(startLoadingProperties());
    }, [ dispatch ] );

    return (
        <BrowserRouter>
            <Routes>
                <Route path="inspection" element={
                    <SetValueScreen />
                } />

                <Route path="PropertiesEdit" element={
                    <PropertiesEdit />
                } />

                <Route path="vehicle/:id" element={
                    <GetValues/>
                } />

                <Route path="/" element={
                    <Home />
                } /> 

            </Routes>
        </BrowserRouter>
    );
};