import React, { useState } from "react";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import {
  InputAdornment,
  OutlinedInput,
  FormControl,
  IconButton,
  Typography,
  Box,
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
    <Box display="flex" width="100%" flexDirection="column">
      <Box
        justifyContent="flex-end"
        alignItems="center"
        display="flex"
        width="100%"
        gap="24px"
      >
        <Typography textAlign="end" minWidth="110px" variant="body1">
          My Password:
        </Typography>

        <FormControl error={error} fullWidth variant="outlined">
          <OutlinedInput
            // fullWidth
            placeholder="Password"
            onChange={handlePasswordChange}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            sx={{
              height: "46px",
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
      </Box>
      {error && (
        <Typography marginLeft="134px" variant="caption" color="error">
          Invalid password
        </Typography>
      )}
    </Box>
  );
}
