import { Typography } from "@material-tailwind/react";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ExitChatIcon } from "../../../../constants";
import { removeSelectedChat } from "../../../../redux/state/chatState";

const ChatheaderSection = () => {
  const { selectedChat: contactDetails } = useSelector((state) => state.chats);

  const dispatch = useDispatch();

  const handleExitSelectedChat = useCallback(() => {
    dispatch(removeSelectedChat());
  }, [dispatch]);

  return (
    <section className="h-[10vh] bg-blue-gray-900 flex items-center text-white px-5">
      {contactDetails && (
        <div className="flex-1">
          <div
            key={contactDetails._id}
            className="flex items-center px-9 gap-3 cursor-pointer"
          >
            <div
              className="border-2 w-14 h-14 border-black rounded-full font-Varela text-black text-3xl flex justify-center items-center uppercase"
              style={{ backgroundColor: contactDetails.avatarColor }}
            >
              {contactDetails.userFirstChar}
            </div>
            <Typography
              className="text-white font-Varela uppercase"
              variant="h5"
            >
              {contactDetails.fullname}
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
