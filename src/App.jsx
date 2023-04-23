import { Box, Link, Typography } from "@mui/material";
import { termsOfUseItems } from "./constants/termsOfUse";
import LogInForm from "./components/LogInForm";
import couple from "./assets/images/couple.png";
import woman from "./assets/images/woman.png";
import logo from "./assets/images/Logo.png";
import man from "./assets/images/man.png";
import "./App.css";

export default function App() {
  return (
    <Box className="wrapper">
      <Box className="logo" component="img" src={logo} />
      <Box
        sx={{
          gap: "70px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <LogInForm />
        <Box className="content_pics">
          <Box component="img" src={man} />
          <Box component="img" src={woman} />
          <Box component="img" src={couple} />
        </Box>
      </Box>
      <Box className="terms_of_use_container">
        <Box className="terms_of_use">
          {termsOfUseItems.map(({ title, url }, index) => {
            return (
              <Link key={index} color="inherit" href={url} target="_blank">
                {title}
              </Link>
            );
          })}
        </Box>
        <Typography>© Copyright 2023, Kaleton Web s.r.o.</Typography>
      </Box>
    </Box>
  );
}
