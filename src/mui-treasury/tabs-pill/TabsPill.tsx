import React from "react";
import { styled } from "@mui/material/styles";
import Tab, { tabClasses } from "@mui/material/Tab";
import { Box, Typography } from "@mui/material";
import PropTypes from 'prop-types';


export const TabItem = styled(Tab)(({ theme }) => ({
  position: "relative",
  borderRadius: "30px",
  textAlign: "center",
  textTransform: 'none',
  transition: "all .5s",
  padding: "10px 15px",
  color: "#555555",
  height: "auto",
  // margin: "10px 0",
  float: "none",
  fontSize: "14px",
  fontWeight: "500",
  [theme.breakpoints.up("md")]: {
    minWidth: 120,
  },
  [`&.${tabClasses.selected}`]: {
    color: "#FFFFFF",
    backgroundColor: theme.palette.secondary.main,
    // boxShadow: "0 7px 10px -5px rgba(76, 175, 80, 0.4)",
  },
}));

export function CustomTabPanel(props) {
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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};