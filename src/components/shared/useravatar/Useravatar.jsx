import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const Useravatar = ({
  borderColor = "border-secondary-500",
  backgroundColor = "bg-blue-500",
}) => {
  const { Registerd_User_info } = useSelector((state) => state.user);

  const fisrtLetterofName = useMemo(() => {
    if (Registerd_User_info) {
      const { fullname } = Registerd_User_info;
      const firstletter = fullname.slice(0, 1);
      return firstletter;
    }
  }, [Registerd_User_info]);

  return (
    <div
      className={`size-12 border-2 ${borderColor} ${backgroundColor} rounded-full font-Varela text-black text-3xl flex-center`}
    >
      {fisrtLetterofName}
    </div>
  );
};

export default Useravatar;
