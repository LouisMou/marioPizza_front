import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Order = () => {
  return (
    <Box>
      <Typography variant="h2">
        i'm the order page, i'll host the pizza list
      </Typography>
      <NavLink to={`/confirmation`}>
        <Typography textAlign="center">order conf</Typography>
      </NavLink>
      <NavLink to={`/signin`}>
        <Typography textAlign="center">signin</Typography>
      </NavLink>
    </Box>
  );
};

export default Order;
