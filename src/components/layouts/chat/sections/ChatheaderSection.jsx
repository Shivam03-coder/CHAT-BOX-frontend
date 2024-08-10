import { Typography } from "@material-tailwind/react";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ExitChatIcon } from "../../../../constants";
import { closeSelectedChat } from "../../../../redux/state/chatState";

const ChatheaderSection = () => {
  const { selectedChatData, selectedChatType } = useSelector(
    (state) => state.chats
  );

  const dispatch = useDispatch();

  const handleExitSelectedChat = useCallback(() => {
    dispatch(closeSelectedChat());
  }, [dispatch]);

  return (
    <section className="min-h-[10vh]  bg-primary-950  flex items-center text-white px-5">
      {selectedChatType === "contact" && selectedChatData && (
        <div className="flex-1">
          <div
            key={selectedChatData._id}
            className="flex items-center px-9 gap-3 cursor-pointer"
          >
            <div
              className="border-2 w-14 h-14 border-black rounded-full font-Varela text-black text-3xl flex justify-center items-center uppercase"
              style={{ backgroundColor: selectedChatData.avatarColor }}
            >
              {selectedChatData.fullname.charAt(0)}
            </div>
            <Typography
              className="text-white font-Varela uppercase"
              variant="h5"
            >
              {selectedChatData.fullname}
            </Typography>
          </div>
        </div>
      )}
      <ExitChatIcon
        onClick={handleExitSelectedChat}
        className="w-8 h-8 text-customOrange-600 cursor-pointer"
      />
    </section>
  );
};

export default ChatheaderSection;
