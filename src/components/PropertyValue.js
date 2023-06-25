// @ts-nocheck
import React from "react";
import { Rating } from "@mui/material";
import { useDispatch } from "react-redux";
import { valueCreate } from "../redux/actions/value";

const PropertyValue = ({ id, value }) => {
  const dispatch = useDispatch();

  const updateValue = (id, e) => {
    dispatch(valueCreate(id, e.target.value));
  };

  return (
    <Rating
      disabled={true}
      size="large"
      name={`simple-controlled-${id}`}
      value={value}
      onChange={(newValue) => updateValue(id, newValue)}
    />
  );
};

export default PropertyValue;
