export const logIn = async (username, password) => {
  const url = `${process.env.REACT_APP_BASE_URL}/sessions`;

  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
      site_key: "no01",
    }),
  });
};
