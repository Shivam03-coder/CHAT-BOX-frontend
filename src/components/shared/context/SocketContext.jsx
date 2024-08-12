import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { disconnectSocket, setSocket } from "../../../redux/state/socketState";
import { setSelectedChatMessages } from "../../../redux/state/chatState";

const HOST = import.meta.env.VITE_SERVER_URL;

const SocketContext = ({ children }) => {
  const userdata = useSelector((state) => state.userinfo.userdata);
  const UserId = useMemo(() => userdata?._id || "", [userdata]);
  const dispatch = useDispatch();
  const { selectedChatType, selectedChatData } = useSelector(
    (state) => state.chats
  );

  useEffect(() => {
    if (UserId) {
      // Initialize WebSocket connection
      const socket = io(HOST, {
        withCredentials: true, 
        query: {
          userId: UserId,
        },
        transports: ["websocket"],
      });

      socket.on("connect", () => {
        console.log("Connected to Network");
      });

      // Handle incoming messages
      const handleReceiveMessages = (message) => {
        if (
          selectedChatType &&
          (selectedChatData._id === message.sender?._id ||
            selectedChatData._id === message.receiver?._id)
        ) {
          dispatch(setSelectedChatMessages(message));
        }
      };

      socket.on("receiveMessage", handleReceiveMessages);

      // Dispatch the socket instance to Redux
      dispatch(setSocket(socket));

      // Cleanup function for socket disconnection
      return () => {
        socket.off("receiveMessage", handleReceiveMessages);
        socket.disconnect();
        dispatch(disconnectSocket());
        console.log("Connection Lost");
      };
    }
  }, [UserId, HOST, dispatch, selectedChatType, selectedChatData]);

  return <>{children}</>;
};

export default SocketContext;
