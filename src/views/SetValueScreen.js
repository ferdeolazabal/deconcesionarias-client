// @ts-nocheck
import React, { useState } from "react";
import { Properties } from "../components/Properties.js";
import { useSelector } from "react-redux";
import CustomTabs from "../components/Tabs.js";

export const SetValueScreen = () => {
  const [value, setValue] = useState(0);

  const { propertyCategories } = useSelector(
    ({ categories }) => categories.categories
  );

  return (
    <div className="container">
      <div className="test">
        <CustomTabs
          children={propertyCategories}
          value={value}
          setValue={setValue}
        />
      </div>

      <Properties property={value} />
    </div>
  );
};
