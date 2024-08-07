import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { disconnectSocket, setSocket } from "../redux/state/socketState";

const HOST = import.meta.env.VITE_SERVER_URL;

const SocketProvider = ({ children }) => {
  const userdata = useSelector((state) => state.userinfo.userdata);

  const UserId = useMemo(() => userdata?._id || "", [userdata]);

  const dispatch = useDispatch();
  useEffect(() => {
    const socket = io(HOST, {
      query: {
        userId: UserId,
      },
    });
    dispatch(setSocket(socket));

    return () => {
      dispatch(disconnectSocket());
    };
  }, [dispatch]);
  return <>{children}</>;
};

export default SocketProvider;
