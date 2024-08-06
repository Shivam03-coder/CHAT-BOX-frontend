import { Typography } from "@material-tailwind/react";
import React, { memo, useEffect, useState } from "react";
import { getRandomColor } from "../../../utils/getRandomcolorCode";

const SearchedList = ({ searchedContactList }) => {
  const [updateUser, setUpdateUser] = useState([]);

  useEffect(() => {
    const Users = searchedContactList.map((user) => ({
      ...user,
      avatarColor: getRandomColor(),
      userFirstChar: user?.fullname.charAt(0),
    }));

    setUpdateUser(Users);
  }, [searchedContactList]);

  return (
    <section className="space-y-3">
      {updateUser.map((list) => (
        <div key={list._id} className="flex items-center px-9 gap-3">
          <div
            className="border-2 size-14 border-black rounded-full font-Varela text-black text-3xl flex-center uppercase"
            style={{ backgroundColor: list.avatarColor }}
          >
            {list.userFirstChar}
          </div>
          <Typography className="text-white font-Varela uppercase" variant="h5">
            {list.fullname}
          </Typography>
        </div>
      ))}
    </section>
  );
};

export default memo(SearchedList);
