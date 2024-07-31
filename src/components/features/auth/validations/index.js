import * as Yup from "yup";

export const RegisterSchema = Yup.object({
  fullname: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Name is required")
    .email("Invalid email format"),
  password: Yup.string().required("Password is required"),
});

export const LoginSchema = Yup.object({
  email: Yup.string()
    .required("Name is required")
    .email("Invalid email format"),
  password: Yup.string().required("Password is required"),
});

export const EmailVerifySchema = Yup.object({
  otp: Yup.string().required("Name is required"),
});

export const passwordChangeSchema = Yup.object({
  password: Yup.string().required("Password is required"),
});
