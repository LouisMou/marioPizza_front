import { AppBar, Box, Typography } from "@mui/material";

import "./style.css";
import { NavLink } from "react-router-dom";

interface Props {
  isAuthenticated: boolean;
  setIsAuthenticated: Function;
}

const Header = ({ isAuthenticated, setIsAuthenticated }: Props) => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 0, bottom: "auto" }}>
      <Box display="flex" alignItems="center" margin="0 1em">
        <NavLink to="/">
          <Box>
            <img
              src="/assets/images/logo.png"
              alt=""
              style={{ width: "2.5em" }}
            />
          </Box>
        </NavLink>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          margin="0 1em"
        >
          <Typography variant="h1">Chez Mario</Typography>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
