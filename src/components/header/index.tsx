import { AppBar, Box, Typography } from "@mui/material";

import "./style.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Props {
  isAuthenticated: boolean;
  setIsAuthenticated: Function;
}

const Header = ({ isAuthenticated, setIsAuthenticated }: Props) => {
  const { t } = useTranslation();

  return (
    <AppBar position="fixed" color="primary" sx={{ top: 0, bottom: "auto" }}>
      <Box display="flex" alignItems="center" margin="0 1em">
        <NavLink to="/">
          <Box>
            <img
              src="/assets/images/logo.png"
              alt={t("common.logo")}
              style={{ width: "2.5em" }}
            />
          </Box>
        </NavLink>
        <Box
          className="title"
          display="flex"
          justifyContent="center"
          alignItems="center"
          margin="0 1em"
        >
          <Typography variant="h1">{t("common.header")}</Typography>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
