import React, { useState } from "react";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import {
  InputAdornment,
  OutlinedInput,
  FormControl,
  IconButton,
  InputLabel,
  Typography,
  Grid,
} from "@mui/material";

export default function PasswordInput({ setPassword, error }) {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid
      justifyContent="center"
      alignItems="center"
      container
      spacing={2}
      width="100%"
      mb={2}
    >
      <Grid xs={4}>
        <Typography variant="body1">My Password:</Typography>
      </Grid>
      <Grid xs={8}>
        <FormControl error={error} fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            fullWidth
            onChange={handlePasswordChange}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        {error && (
          <Typography variant="caption" color="error">
            Invalid password
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}
