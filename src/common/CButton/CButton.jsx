/* eslint-disable react/prop-types */
import React from "react";
import { Button, CircularProgress } from "@mui/material";

const CButton = (props) => {
  return (
    <Button
      sx={{
        textTransform: "none",
        boxShadow: "none",
        height: '56px',
        fontSize:'16px',
        borderRadius:'8px',
        position: "relative",
        ...props.style,
      }}
      size={props.size}
      variant={props.variant}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      onClick={props.onClick}
      disabled={
        props.isLoading || props.disable
          ? props.isLoading || props.disable
          : false
      }
      color={props.color}
      onSubmit={props.onSubmit}
    >
      {props.children}
      {props.isLoading && (
        <CircularProgress
          size={24}
          sx={{
            color: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-12px",
            marginLeft: "-12px",
          }}
        />
      )}
    </Button>
  );
};

export default CButton;
