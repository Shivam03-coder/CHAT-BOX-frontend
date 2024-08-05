import React, { useMemo } from "react";
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
import { Link } from "react-router-dom";

const ProfileinfoSection = () => {
  const { userdata } = useSelector((state) => state.userinfo);
  const Userdata = useMemo(() => {
    const { fullname, email } = userdata;
    return { fullname, email };
  }, [userdata]);
  console.log(Userdata);
  return (
    <section className="absolute bottom-2 left-0 h-16 w-full flex gap-2 items-center justify-center p-5">
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
          <span className="flex-center gap-3 text-customOrange-300 cursor-pointer font-medium">
            <LogoutIcon className="size-7 text-customOrange-400" />
            LOGOUT
          </span>
        </PopoverContent>
      </Popover>
      <div>
        <Typography variant="h6">{Userdata.fullname.toUpperCase()}</Typography>
        <Typography className="text-xs" variant="p">
          {Userdata.email}
        </Typography>
      </div>
    </section>
  );
};

export default ProfileinfoSection;
