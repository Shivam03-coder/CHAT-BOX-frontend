import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { GoEyeClosed } from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { LoginSchema } from "./validations";
import { useLoginUserMutation } from "../../../redux/endpoints/userauth";
import { LoadingSpinner } from "../../shared/spinners/LoadingSpinner";
import { ScaleAnimation } from "../../animations";
import { useGSAP } from "@gsap/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useCallback, useMemo } from "react";
import Passwordchnagemodel from "./ChangepPasswordmodel";
import { useSelector } from "react-redux";

const initialValues = {
  email: "",
  password: "",
};

export default function Loginform({ showPassword, setShowpassword }) {
  const [LoginUser, { isLoading }] = useLoginUserMutation();
  const [showPasswordChangeModel, setShowPasswordChangeModel] = useState(false);
  const { userdata } = useSelector((state) => state.userinfo);

  const _User_id = useMemo(() => userdata._id || "", [userdata]);
  console.log("🚀 ~ Loginform ~ _User_id:", _User_id)

  const navigate = useNavigate();

  const location = useLocation();

  useGSAP(() => {
    ScaleAnimation("#loginCard");
  }, [location]);

  const handlePasswordToggle = useCallback(() => {
    setShowpassword((prev) => !prev);
  }, [setShowpassword]);

  const handlePasswordChangeModelToggle = useCallback(() => {
    setShowPasswordChangeModel((prev) => !prev);
  }, []);

  const { errors, handleChange, values, handleSubmit } = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: async (userinfo, action) => {
      try {
        const response = await LoginUser(userinfo).unwrap();
        const { message, status } = response;

        if (status === "success") {
          action.resetForm();

          toast.success(message);

          navigate(`/chat/${_User_id}`);

          window.location.reload();
        }
      } catch (error) {
        if (error.data.status === "failed") {
          toast.error(error.data.message);
        }
      }
    },
  });

  const passwordIcon = (
    <GoEyeClosed
      className="cursor-pointer"
      size={17}
      color="blue"
      onClick={handlePasswordToggle}
    />
  );

  return (
    <section>
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
                icon={passwordIcon}
              />
              <p className="ml-2 text-red-400 font-Inter">{errors?.password}</p>
            </div>
          </div>
          <div className="flex flex-col my-3">
            <Typography
              onClick={handlePasswordChangeModelToggle}
              className=" underline-offset-2 underline text-secondary-400"
            >
              forgotten password
            </Typography>
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
      {showPasswordChangeModel && (
        <Passwordchnagemodel
          ShowpasswordchangeModel={showPasswordChangeModel}
          setShowpasswordchangeModel={setShowPasswordChangeModel}
        />
      )}
    </section>
  );
}
