import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="body1" sx={{ padding: "5px" }}>
        &copy; {t("common.footer")}
      </Typography>
    </Box>
  );
};

export default Footer;
