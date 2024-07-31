import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { GoEyeClosed } from "react-icons/go";
import { useFormik } from "formik";
import { RegisterSchema } from "./validations";
import { useSignupUserMutation } from "../../../redux/endpoints/userauth";
import { useDispatch } from "react-redux";
import { setUsercredentials } from "../../../redux/state/userState";
import { LoadingSpinner } from "../../shared/spinners/LoadingSpinner";

const initialValues = {
  fullname: "",
  email: "",
  password: "",
};

export function Signupform({ showPassword, setShowpassword }) {
  const [RegiusterUser, { isLoading }] = useSignupUserMutation();

  const dispatch = useDispatch();

  // FORM SUBMISSION

  const { errors, handleChange, values, handleSubmit } = useFormik({
    initialValues,
    validationSchema: RegisterSchema,

    onSubmit: async (userinfo, action) => {
      try {
        const response = await RegiusterUser(userinfo).unwrap();

        const { message, status, user } = response;

        if (user && status === "success") {
          action.resetForm();

          dispatch(setUsercredentials(user));

          window.location.reload();
        }
      } catch (error) {
        if (error.data && error.data.status === "failed") {
          alert(error.data.message);
          action.resetForm();
        }
      }
    },
  });

  return (
    <Card
      id="loginCard"
      className="backdrop-blur-2xl !text-white p-5 "
      color="transparent"
      shadow={false}
    >
      <Typography className="text-center" variant="h3">
        SIGN UP
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w- "
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" className="-mb-3">
            Your Name
          </Typography>
          <div className="space-y-2">
            <Input
              size="lg"
              placeholder="name@mail.com"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
              className=" !border-t-white text-lg text-white focus:!border-secondary-300"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <p className="ml-2 text-red-400 font-Inter">{errors?.fullname}</p>
          </div>
          <Typography variant="h6" className="-mb-3">
            Your Email
          </Typography>
          <div className="space-y-2">
            <Input
              size="lg"
              placeholder="name@mail.com"
              name="email"
              value={values.email}
              onChange={handleChange}
              className=" !border-t-white text-lg text-white focus:!border-secondary-300"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <p className="ml-2 text-red-400 font-Inter">{errors?.email}</p>
          </div>

          <Typography variant="h6" className="-mb-3">
            Password
          </Typography>
          <div className="space-y-2">
            <Input
              type={showPassword ? "text" : "password"}
              size="lg"
              placeholder="********"
              name="password"
              value={values.password}
              onChange={handleChange}
              className=" !border-t-white text-lg text-white focus:!border-secondary-300"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              icon={
                <GoEyeClosed
                  size={17}
                  color="amber"
                  onClick={() => setShowpassword(!showPassword)}
                />
              }
            />
            <p className="ml-2 text-red-400 font-Inter">{errors?.password}</p>
          </div>
        </div>
        <Button
          type="submit"
          className="mt-6 flex-center bg-secondary-400 text-xl"
          fullWidth
        >
          {isLoading ? <LoadingSpinner /> : "SIGN UP"}
        </Button>
      </form>
    </Card>
  );
}
