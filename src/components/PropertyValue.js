// @ts-nocheck
import React from "react";
import { Rating } from "@mui/material";

const PropertyValue = (props) => {
  const { id, name, sizeStar = "small", onChange = () => 1, ...rest } = props;

  return (
    <div className="content" key={id}>
      {name && <div>{name} </div>}

      <Rating
        size={sizeStar}
        name={`simple-controlled-${id}`}
        onChange={(e, newValue) => {
          onChange(id, newValue);
        }}
        {...rest}
      />
    </div>
  );
};

export default PropertyValue;
