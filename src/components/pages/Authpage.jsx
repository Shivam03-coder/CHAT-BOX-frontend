import React, { useEffect, useState } from "react";
import Loginform from "../features/auth/Loginform";
import { Signupform } from "../features/auth/Signupform";
import { useSelector } from "react-redux";

function Authpage() {
  const user = false;
  const { Registerd_User_info } = useSelector((state) => state.user);

  const [isuserRegistered, setIsuserRegistered] = useState(
    Registerd_User_info ? true : false
  );

  const [showPassword, setShowpassword] = useState(false);

  useEffect(() => {
    if (Registerd_User_info) {
      setIsuserRegistered(true);
    } else {
      setIsuserRegistered(false);
    }
  }, [Registerd_User_info, isuserRegistered]);
  return (
    <>
      <div className="flex-center h-screen !text-white  place-items-center">
        {isuserRegistered ? (
          <Loginform
            showPassword={showPassword}
            setShowpassword={setShowpassword}
          />
        ) : (
          <Signupform
            showPassword={showPassword}
            setShowpassword={setShowpassword}
          />
        )}
      </div>
    </>
  );
}

export default Authpage;
