import { logInFormWrapper, logInTitle } from "../assets/styles/logInComponent";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import UserNameInput from "./UserNameInput";
import PasswordInput from "./PasswordInput";
import LogInButton from "./LogInButton";
import { logIn } from "../api/auth";
import {
  hasFormErrors,
  isPasswordValid,
  isUsernameValid,
} from "../helpers/validation";

export default function LogInForm() {
  const [isLogInButtonDisabled, setIsLogInButtonDisabled] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    username: false,
    password: false,
  });
  useEffect(() => {
    if (userName && password) {
      setIsLogInButtonDisabled(false);
    }
  }, [userName, password]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setError({
      username: !isUsernameValid(userName),
      password: !isPasswordValid(password),
    });

    if (
      hasFormErrors({
        username: !isUsernameValid(userName),
        password: !isPasswordValid(password),
      })
    ) {
      return;
    }

    const response = await logIn(userName, password);

    alert(response.ok ? "You are logged in" : "Wrong email or password");
  };

  return (
    <Box sx={logInFormWrapper}>
      <Typography sx={logInTitle} margin="auto" mb={3}>
        GET LOVELY CUTIES IN YOUR AREA!
      </Typography>
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        gap="20px"
        mb="20px"
      >
        <UserNameInput
          error={error.username}
          userName={userName}
          setUserName={setUserName}
        />
        <PasswordInput
          error={error.password}
          password={password}
          setPassword={setPassword}
        />
      </Box>
      <LogInButton
        isLogInButtonDisabled={isLogInButtonDisabled}
        onClick={handleFormSubmit}
      />
    </Box>
  );
}
