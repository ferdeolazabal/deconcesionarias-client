import React from "react";
import { Tabs, Tab, Box } from "@mui/material";

const indexTab = (index) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
});

const boxStyles = {
  alignItems: "center",
  width: "100%",
  height: "100%",
};

const CustomTabs = (props) => {
  const { children, value, setValue } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={boxStyles} mt={3}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        variant="scrollable"
        // variant="fullWidth"
        indicatorColor="secondary"
        allowScrollButtonsMobile
        scrollButtons="auto"
        selectionFollowsFocus
      >
        {children &&
          children?.map((category, i) => (
            <Tab
              icon={
                <i className="material-icons outlined md-48 orange600">
                  {category?.icon}
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
  );
};

export default CustomTabs;
