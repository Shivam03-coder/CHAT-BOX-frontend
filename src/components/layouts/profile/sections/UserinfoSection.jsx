import { Button, Input } from "@material-tailwind/react";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserdata } from "../../../../redux/state/userprofileState";
import {  useNavigate } from "react-router-dom";

const UserinfoSection = () => {
  const { userdata } = useSelector((state) => state.userinfo);
  const [Username, setUsername] = useState(userdata?.fullname);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleUsername = useCallback(() => {
    dispatch(setUserdata(Username));

    navigate("/chat");
  }, [dispatch, Username]);

  return (
    <section className="text-white space-y-9 flex-center flex-col">
      <Input
        color="white"
        className="!text-white text-xl font-Inter font-medium text-center uppercase"
        value={Username}
        variant="static"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button
        onClick={handleUsername}
        className="bg-secondary-400 text-black w-48"
      >
        SAVE
      </Button>
    </section>
  );
};

export default UserinfoSection;
