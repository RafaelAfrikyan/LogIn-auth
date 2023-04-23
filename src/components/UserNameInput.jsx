import React from "react";
import { Grid, TextField, Typography } from "@mui/material";

export default function UserNameInput({ error, userName, setUserName }) {
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <Grid
      justifyContent="end"
      alignItems="center"
      direction="row"
      width="100%"
      spacing={2}
      container
      mb={4}
    >
      <Grid md={4}>
        <Typography variant="body1">My Username:</Typography>
      </Grid>
      <Grid md={8}>
        <TextField
          onChange={handleUserNameChange}
          sx={{ borderColor: "#F6A95F" }}
          variant="outlined"
          value={userName}
          label="Username"
          margin="normal"
          error={error}
          fullWidth
        />

        {error && (
          <Typography variant="caption" color="error">
            Invalid username
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}
