import { Box, Typography } from "@mui/material";
import PropTypes from 'prop-types';



export const TabPanel = (props) => {
    // @ts-ignore
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box sx={{ p: 3 }}>
                <Typography component={'span'} variant={'body2'}>
                    {children}
                </Typography>
            </Box>
        )}
        </div>
    );
};

// @ts-ignore
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};