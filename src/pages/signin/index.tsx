import {
  Box,
  Button,
  Card,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import * as yup from "yup";
import AuthenticationService from "../../services/AuthenticationService";
import { useState } from "react";
import { KeyOutlined, LoginOutlined } from "@mui/icons-material";
import User from "../../models/security/User";

interface Props {
  setIsAuthenticated: Function;
  user?: User;
}

const Signin = ({ user, setIsAuthenticated }: Props) => {
  const { t } = useTranslation();
  const [error, setError] = useState<string>("");

  const schema = yup.object().shape({
    lastname: yup
      .string()
      .required(t("error.required", { field: t("common.firstname") }))
      .test(
        "2Len",
        t("error.minLen", { field: "2" }),
        (value: string) => value.length >= 2
      ),
    firstname: yup
      .string()
      .required(t("error.required", { field: t("common.firstname") }))
      .test(
        "2Len",
        t("error.minLen", { field: "2" }),
        (value: string) => value.length >= 2
      ),
    password: yup
      .string()
      .required(t("error.required", { field: t("common.passwordPlaceholder") }))
      .test(
        "6Len",
        t("error.minLen", { field: "6" }),
        (value: string) => value.length >= 6
      ),
    passwordConfirmation: yup
      .string()
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),
    address: yup
      .string()
      .required(t("error.required", { field: t("common.address") }))
      .test(
        "200Len",
        t("error.maxLen", { field: "200" }),
        (value: string) => value.length <= 200
      ),
    login: yup
      .string()
      .required(
        t("error.required", {
          field: t("common.loginPhonenumber"),
        }).toUpperCase()
      )
      .test(
        "4Len",
        t("error.minLen", { field: "4" }),
        (value: string) => value.length >= 4
      )
      .test(
        "15Len",
        t("error.maxLen", { field: "15" }),
        (value: string) => value.length <= 15
      ),
  });

  const formik = useFormik({
    initialValues: {
      lastname: "",
      firstname: "",
      password: "",
      passwordConfirmation: "",
      address: "",
      login: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        let user: User = {
          id: 0,
          firstname: values.firstname,
          lastname: values.lastname,
          password: values.passwordConfirmation,
          address: values.address,
          username: values.login,
        };
        await AuthenticationService.signup(user);

        await AuthenticationService.login(
          values.login,
          values.passwordConfirmation
        );
        window.location.href = "/success";
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  return (
    <>
      <Card className="login" elevation={10}>
        <Typography color="red">{error}</Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            placeholder={t("common.lastnamePlaceholder")}
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
            value={formik.values.lastname}
            name="lastname"
            error={formik.touched.lastname && Boolean(formik.errors.lastname)}
            helperText={formik.touched.lastname && formik.errors.lastname}
          />
          <TextField
            placeholder={t("common.firstnamePlaceholder")}
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
            value={formik.values.firstname}
            name="firstname"
            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
            helperText={formik.touched.firstname && formik.errors.firstname}
          />
          <TextField
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
          <TextField
            placeholder={t("common.passwordConfirmationPlaceholder")}
            type="passwordConfirmation"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyOutlined />
                </InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.passwordConfirmation}
            name="passwordConfirmation"
            error={
              formik.touched.passwordConfirmation &&
              Boolean(formik.errors.passwordConfirmation)
            }
            helperText={
              formik.touched.passwordConfirmation &&
              formik.errors.passwordConfirmation
            }
          />
          <TextField
            placeholder={t("common.addressPlaceholder")}
            type="address"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyOutlined />
                </InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            name="address"
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
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
          <Button variant="contained" type="submit">
            {t("common.create")}
          </Button>
        </form>
      </Card>
    </>
  );
};

export default Signin;
