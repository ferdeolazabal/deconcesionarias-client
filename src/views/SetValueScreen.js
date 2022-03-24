import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Inspection } from "../components/Inspection.js";
import { startLoadingCategories } from "../redux/actions/categories.js";
import { startLoadingProperties } from "../redux/actions/properties.js";

export const SetValueScreen = () => {

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(startLoadingCategories());
        dispatch(startLoadingProperties());
    }, [ dispatch ] );

    return (
        <>
            <Inspection />
        </>
    );
};