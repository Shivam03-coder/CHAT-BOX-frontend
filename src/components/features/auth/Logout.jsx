import { useNavigate } from "react-router-dom";
import { LogoutIcon } from "../../../constants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCallback } from "react";

const Logout = ({ LogoutUser }) => {
  const naviagate = useNavigate();
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
    <div
      onClick={handleUserLogout}
      className="flex-center text-xl gap-3 text-customOrange-600 cursor-pointer font-medium"
    >
      <LogoutIcon className="size-9 text-customOrange-600" />
      LOGOUT
    </div>
  );
};

export default Logout;
