import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { GoEyeClosed } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { LoginSchema } from "./validations";
import { useLoginUserMutation } from "../../../redux/endpoints/userauth";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { LoadingSpinner } from "../../shared/spinners/LoadingSpinner";

const initialValues = {
  email: "",
  password: "",
};

export default function Loginform({ showPassword, setShowpassword }) {
  const [LoginUser, { isLoading }] = useLoginUserMutation();

  const Navigate = useNavigate();

  const { Registerd_User_info } = useSelector((state) => state.user);

  const Userid = useMemo(() => Registerd_User_info?._id, [Registerd_User_info]);

  const { errors, handleChange, values, handleSubmit } = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: async (userinfo, action) => {
      try {
        const response = await LoginUser(userinfo).unwrap();

        const { message, status } = response;

        if (status === "success") {
          action.resetForm();

          Navigate(`/chat/${Userid}`);

          setTimeout(() => {
            alert(message);
          }, 5000);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Card
      id="loginCard"
      className="backdrop-blur-2xl !text-white p-5"
      color="transparent"
      shadow={false}
    >
      <Typography className="text-center" variant="h3">
        LOGIN
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-6">
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
                  className="cursor-pointer"
                  size={17}
                  color="blue"
                  onClick={() => setShowpassword(!showPassword)}
                />
              }
            />
            <p className="ml-2 text-red-400 font-Inter">{errors?.password}</p>
          </div>
        </div>
        <div className="flex flex-col my-3">
          <a
            onClick={() => Navigate("/change-password")}
            className=" underline-offset-2 underline text-secondary-400"
            href=""
          >
            forgotten password
          </a>
        </div>
        <Button
          type="submit"
          className="mt-6  flex-center bg-secondary-400 text-xl"
          fullWidth
        >
          {isLoading ? <LoadingSpinner /> : "LOG IN"}
        </Button>
      </form>
    </Card>
  );
}
