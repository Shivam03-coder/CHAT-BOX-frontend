import { Button } from "@material-tailwind/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  AttachmentIcon,
  EmojiPickerIcon,
  SendMsgIcon,
} from "../../../../constants";
import EmojiPicker from "emoji-picker-react";
import { useSelector } from "react-redux";

const MessagebarSection = () => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { selectedChatType, selectedChatData } = useSelector(
    (state) => state.chats
  );
  const { socket } = useSelector((state) => state.socket);
  const userInfo = useSelector((state) => state.userinfo.userdata);
  const emojiref = useRef();

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleEmojiPicker = useCallback((emoji) => {
    setMessage((msg) => msg + emoji.emoji);
  }, []);

  const handleSendMessage = () => {
    if (selectedChatType === "contact") {
      socket.emit("sendMessage", {
        sender: userInfo._id,
        receiver: selectedChatData._id,
        content: message,
        messageType: "text",
        fileUrl: undefined,
      });
    }
    setMessage("");
  };

  const toggleEmojiPicker = useCallback(() => {
    setShowEmojiPicker((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (emojiref.current && !emojiref.current.contains(e.target)) {
        setShowEmojiPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="h-[14vh] flex items-center justify-center text-white pr-3">
      <div className="flex-1 flex items-center px-4 rounded-2xl bg-blue-gray-900 mx-4">
        <AttachmentIcon className="size-8 text-customOrange-500" />
        <input
          placeholder="Enter your message...."
          className="flex-1 outline-none p-4 bg-transparent font-Inter text-lg"
          value={message}
          onChange={handleChange}
        />
        <div className="relative">
          <EmojiPickerIcon
            onClick={toggleEmojiPicker}
            className="size-8 text-customYellow-300 cursor-pointer"
          />
          {showEmojiPicker && (
            <div ref={emojiref} className="absolute bottom-20 right-0">
              <EmojiPicker
                className="!scrollbar-hidden"
                onEmojiClick={handleEmojiPicker}
                theme="dark"
                autoFocusSearch={false}
              />
            </div>
          )}
        </div>
      </div>
      <Button onClick={handleSendMessage} className="flex-center px-3">
        <SendMsgIcon className="size-8 text-secondary-300" />
      </Button>
    </section>
  );
};

export default MessagebarSection;
