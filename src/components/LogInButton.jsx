import { Button } from "@mui/material";
import React from "react";

export default function LogInButton({ onClick, isLogInButtonDisabled }) {
  return (
    <Button
      disabled={isLogInButtonDisabled ? true : false}
      variant="contained"
      onClick={onClick}
      style={{
        background: isLogInButtonDisabled ? "#CBC8C5" : "#F6A95F",
        textTransform: "none",
        borderRadius: "12px",
        color: "#3E352F",
        width: "115px",
      }}
    >
      Log In
    </Button>
  );
}
