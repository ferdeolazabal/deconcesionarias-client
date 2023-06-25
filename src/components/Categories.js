// @ts-nocheck
import { useState } from "react";
import { useSelector } from "react-redux";
import { Tabs, Tab, Box } from "@mui/material";

import { Properties } from "./Properties";

const indexTab = (index) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
});

const Categories = () => {
  const { propertyCategories } = useSelector(
    ({ categories }) => categories.categories
  );
  console.log({ propertyCategories });

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container">
      <div className="test">
        <Box
          sx={{
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
          mt={3}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            variant="scrollable"
            //variant="fullWidth"
            indicatorColor="secondary"
            allowScrollButtonsMobile
            scrollButtons="auto"
            selectionFollowsFocus
          >
            {propertyCategories &&
              propertyCategories.map((category, i) => (
                <Tab
                  icon={
                    <i className="material-icons outlined md-48 orange600">
                      {category.icon}
                    </i>
                  }
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
