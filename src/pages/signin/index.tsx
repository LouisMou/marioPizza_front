import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Signin = () => {
  return (
    <Box>
      <Typography variant="h2">
        i'm the signin page, i'll host the signin form
      </Typography>
      <NavLink to={`/success`}>
        <Typography textAlign="center">successful account creation</Typography>
      </NavLink>
    </Box>
  );
};

export default Signin;
