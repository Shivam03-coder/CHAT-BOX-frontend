import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { EmailVerifySchema } from "./validations";
import { useMailVerifyMutation } from "../../../redux/endpoints/userauth";
import { useFormik } from "formik";

const initialValues = {
  otp: "",
};

export default function Emailverifyform() {
  const [Verifyotp, { isLoading }] = useMailVerifyMutation();

  const { email } = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const { errors, handleChange, values, handleSubmit } = useFormik({
    initialValues,
    onSubmit: async ({ otp }, action) => {
      try {
        const userInfo = {
          email,
          otp,
        };
        const resposne = await Verifyotp(userInfo).unwrap();

        if (resposne.status === "success") {
          alert(resposne.message);
          action.resetForm();
        }
      } catch (error) {
        console.log(error);
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
        EMAIL-VERIFY
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w- "
      >
        <div className="mb-1 flex flex-col gap-6">
          <Input
            size="lg"
            variant="static"
            placeholder="OTP"
            name="otp"
            value={values.otp}
            onChange={handleChange}
            className=" !border-t-white text-xl text-center text-white focus:!border-secondary-300"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <p className="ml-2 text-red-400 font-Inter">{errors?.otp}</p>
        <Button
          type="submit"
          className="mt-6 bg-secondary-600 text-xl"
          fullWidth
        >
          CONFIRM
        </Button>
      </form>
    </Card>
  );
}
