export const isUsernameValid = (username) => {
  return !!username.trim();
};

export const isPasswordValid = (password) => {
  return !!password.trim();
};

export const hasFormErrors = (error) => {
  return error.username && error.password;
};
