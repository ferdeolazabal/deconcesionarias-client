// @ts-nocheck
import React from "react";
import { Rating } from "@mui/material";
import { useDispatch } from "react-redux";
import { valueCreate } from "../redux/actions/value";

const PropertyValue = (props) => {
  const { id, name, value, sizeStar = "small", disabled = false } = props;
  const dispatch = useDispatch();

  const updateValue = (id, e) => {
    dispatch(valueCreate(id, e.target.value));
  };

  return (
    <div className="content" key={id}>
      <div>{name} </div>

      <Rating
        disabled={disabled}
        size={sizeStar}
        name={`simple-controlled-${id}`}
        value={value}
        onChange={(newValue) => updateValue(id, newValue)}
      />
    </div>
  );
};

export default PropertyValue;
