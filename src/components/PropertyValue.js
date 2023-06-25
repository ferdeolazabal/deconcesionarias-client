// @ts-nocheck
import React from "react";
import { Rating } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { valueCreate } from "../redux/actions/value";

const PropertyValue = (props) => {
  const {
    id,
    name,
    value,
    sizeStar = "small",
    onChange = () => 1,
    ...rest
  } = props;

  return (
    <div className="content" key={id}>
      {name && <div>{name} </div>}

      <Rating
        size={sizeStar}
        name={`simple-controlled-${id}`}
        value={value}
        onChange={(e, newValue) => {
          onChange(id, newValue);
        }}
        {...rest}
      />
    </div>
  );
};

export default PropertyValue;
