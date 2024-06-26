import {
  Button,
  Card,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

import "./style.css";
import { useFormik } from "formik";
import { KeyOutlined, LoginOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import * as yup from "yup";
import AuthenticationService from "../../services/AuthenticationService";
import Signin from "../signin";

interface Props {
  setIsAuthenticated: Function;
}

const Login = ({ setIsAuthenticated }: Props) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseSignin = () => {
    setOpen(false);
  };

  const [error, setError] = useState<string>("");

  const schema = yup.object().shape({
    login: yup
      .string()
      .required(
        t("error.required", {
          field: t("common.loginPlaceholder"),
        }).toUpperCase()
      )
      .test(
        "3Len",
        t("error.minLen", { field: "3" }),
        (value: string) => value.length >= 3
      ),
    password: yup
      .string()
      .required(t("error.required", { field: t("common.passwordPlaceholder") }))
      .test(
        "4Len",
        t("error.minLen", { field: "4" }),
        (value: string) => value.length >= 4
      ),
  });

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      AuthenticationService.login(values.login, values.password)
        .then((response) => {
          setIsAuthenticated(response);
          setError(response ? "" : t("common.loginError"));
        })
        .catch((reason) => {
          console.error(reason);
          setError(t("common.technicalError"));
        });
    },
  });

  return (
    <>
      <Card className="login" elevation={10}>
        <Typography color="red">{error}</Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            placeholder={t("common.loginPlaceholder")}
            type="text"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LoginOutlined />
                </InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.login}
            name="login"
            error={formik.touched.login && Boolean(formik.errors.login)}
            helperText={formik.touched.login && formik.errors.login}
          />
          <TextField
            className="textfield_login"
            placeholder={t("common.passwordPlaceholder")}
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyOutlined />
                </InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            name="password"
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            className="signup_button"
            variant="contained"
            type="button"
            onClick={handleOpen}
          >
            {t("common.create")}
          </Button>
          <Button className="login_button" variant="contained" type="submit">
            {t("common.connect")}
          </Button>
        </form>
      </Card>
      <Modal open={open} onClose={handleCloseSignin}>
        <Signin
          setIsAuthenticated={setIsAuthenticated}
          handleCloseSignin={handleCloseSignin}
        />
      </Modal>
    </>
  );
};

export default Login;
