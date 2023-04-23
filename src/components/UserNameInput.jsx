import React from "react";
import { Box, FormControl, OutlinedInput, Typography } from "@mui/material";

export default function UserNameInput({ error, userName, setUserName }) {
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <Box
      justifyContent="flex-end"
      alignItems="center"
      display="flex"
      // width="100%"
      gap="24px"
    >
      <Typography width="30%" variant="body1">
        My Username:
      </Typography>
      <FormControl error={error} fullWidth variant="outlined">
        <OutlinedInput
          onChange={handleUserNameChange}
          variant="outlined"
          value={userName}
          placeholder="Username"
          margin="normal"
          error={error}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: "2px solid #F6A95F",
                borderRadius: "12px",
              },
            ".MuiOutlinedInput-notchedOutline>legend, &.MuiInputLabel-animated":
              {
                display: "none ",
              },
          }}
        />
        {error && (
          <Typography variant="caption" color="error">
            Invalid username
          </Typography>
        )}
      </FormControl>
    </Box>
  );
}
