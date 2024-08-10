import React, { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import Useravatar from "../../../shared/useravatar/Useravatar";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
  Typography,
} from "@material-tailwind/react";
import { LogoutIcon, ProfileIcon } from "../../../../constants";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "../../../../redux/endpoints/userauth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileinfoSection = () => {
  const userdata = useSelector((state) => state.userinfo.userdata);

  const [LogoutUser, { isLoading }] = useLogoutUserMutation();

  const naviagate = useNavigate();

  const Userdata = useMemo(
    () => ({
      fullname: userdata?.fullname || "",
      email: userdata?.email || "",
    }),
    [userdata]
  );

  const handleUserLogout = useCallback(async () => {
    try {
      const resp = await LogoutUser().unwrap();
      if (resp.status === "sucess") {
        toast.success(resp.message);
        naviagate("/auth");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }, [LogoutUser]);

  return (
    <section className="absolute bottom-0 left-0 h-16 w-full flex gap-2 items-center justify-center p-5">
      <Popover
        placement="top-end"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <PopoverHandler>
          <Button className="p-0 rounded-full">
            <Useravatar size="size-12" />
          </Button>
        </PopoverHandler>
        <PopoverContent className="bg-black text-white flex flex-col gap-3">
          <Link
            to="/profile/:1234"
            className="flex-center gap-3 text-customYellow-300 cursor-pointer font-medium"
          >
            <ProfileIcon className="size-7 text-customYellow-400" />
            PROFILE
          </Link>
          <span
            onClick={handleUserLogout}
            className={`flex-center gap-3 ${
              isLoading
                ? "text-gray-500 cursor-not-allowed"
                : "text-customOrange-300 cursor-pointer"
            } font-medium`}
          >
            <LogoutIcon className="size-7 text-customOrange-400" />
            {isLoading ? "LOGGING OUT..." : "LOGOUT"}
          </span>
        </PopoverContent>
      </Popover>
      <div>
        <Typography variant="h6" className="uppercase">
          {Userdata.fullname}
        </Typography>
        <Typography  className="text-xs">
          {Userdata.email}
        </Typography>
      </div>
    </section>
  );
};

export default ProfileinfoSection;
