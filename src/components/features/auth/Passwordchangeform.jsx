import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import { passwordChangeSchema } from "./validations";
import { useChangePasswordMutation } from "../../../redux/endpoints/userauth";

const initialValues = {
  password: "",
};

export default function Passwordchangeform() {

  const [Changepassword, { isLoading }] = useChangePasswordMutation();


  const { handleChange, values, handleSubmit } = useFormik({
    initialValues,
    validationSchema: passwordChangeSchema,
    onSubmit: async (password, action) => {
      try {
        console.log(password)
        const response = await Changepassword(password).unwrap();
        console.log("🚀 ~ onSubmit: ~ response:", response)
      } catch (error) {
        console.log(error)
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
        PASSWORD-CHANGE
      </Typography>
      <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" className="-mb-3">
            Password
          </Typography>
          <Input
            size="lg"
            placeholder="********"
            name="password"
            value={values.password}
            onChange={handleChange}
            className=" !border-t-white text-lg text-white focus:!border-secondary-300"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button type="submit" className="mt-6 bg-secondary-400 text-xl" fullWidth>
          CONFIRM
        </Button>
      </form>
    </Card>
  );
}
