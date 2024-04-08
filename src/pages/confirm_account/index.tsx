import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const SigninSuccess = () => {
  return (
    <Box>
      <Typography variant="h2">
        i'm the signin success page, i'll host the success message and send
        users to the order page
      </Typography>
      <NavLink to={`/`}>
        <Typography textAlign="center">order</Typography>
      </NavLink>
    </Box>
  );
};

export default SigninSuccess;
