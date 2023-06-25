// @ts-nocheck
import { useState } from "react";
import { useSelector } from "react-redux";
import { Tabs, Tab, Box } from "@mui/material";

import { Properties } from "./Properties";

const indexTab = (index) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
});

const boxStyles = {
  alignItems: "center",
  width: "100%",
  height: "100%",
};

const Categories = () => {
  const [value, setValue] = useState(0);

  const { propertyCategories } = useSelector(
    ({ categories }) => categories.categories
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const icon = (cat) => (
    <i className="material-icons outlined md-48 orange600">{cat.icon}</i>
  );

  return (
    <div className="container">
      <div className="test">
        <Box sx={boxStyles} mt={3}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            // variant="scrollable"
            variant="fullWidth"
            indicatorColor="secondary"
            allowScrollButtonsMobile
            scrollButtons="auto"
            selectionFollowsFocus
          >
            {propertyCategories?.map((category, i) => (
              <Tab
                icon={(category) => icon(category)}
                key={category.id}
                label={category.name}
                {...indexTab(i)}
                wrapped
              />
            ))}
          </Tabs>
        </Box>
      </div>

      <Properties property={value} />
    </div>
  );
};

export default Categories;
