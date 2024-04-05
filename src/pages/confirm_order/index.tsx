import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const OrderConfirmation = () => {
  return (
    <Box>
      <Typography variant="h2">
        i'm the order confirmation page, i'll tell the user their order went
        well and send back to the order page
      </Typography>
      <NavLink to={`/order`}>
        <Typography textAlign="center">order</Typography>
      </NavLink>
    </Box>
  );
};

export default OrderConfirmation;
