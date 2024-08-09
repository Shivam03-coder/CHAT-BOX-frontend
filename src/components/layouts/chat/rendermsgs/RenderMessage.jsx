import moment from "moment";
import { useGetMsgsMutation } from "../../../../redux/endpoints/userauth";
import { useEffect, useMemo } from "react";
import {
  addMessageToSelectedChat,
  clearSelectedChatMessages,
} from "../../../../redux/state/chatState";
import { useDispatch } from "react-redux";

const RenderMessage = ({
  scrollScreenRef,
  selectedChatType,
  selectedChatData,
  selectedChatMessages,
}) => {
  const [getMsgs, { isLoading }] = useGetMsgsMutation();

  const dispatch = useDispatch();

  // const id = useMemo(
  //   () => ({
  //     id: selectedChatData._id || "",
  //   }),
  //   [selectedChatData]
  // );
  const contactSelcted = useMemo(
    () => ({
      id: selectedChatData._id || "",
      name: selectedChatData.userFirstChar || "",
    }),
    []
  );

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        if (selectedChatType === "contact") {
          const response = await getMsgs({ id: contactSelcted.id }).unwrap();
          if (response.status === "success") {
            console.log(response.data);
            dispatch(addMessageToSelectedChat(response.data));
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMessages();
    return () => {
      clearSelectedChatMessages();
    };
  }, [selectedChatType, selectedChatData]);

  const renderMessages = () => {
    let lastDate = null;
    return selectedChatMessages.map((message) => {
      const messageDate = moment(message.timestamps).format("YYYY-MM-DD");
      const showDate = messageDate !== lastDate;
      lastDate = messageDate;
      return (
        <div key={message._id}>
          {showDate && (
            <div className="text-center text-secondary-300  my-3">
              {moment(message.timestamps).format("LL")}
            </div>
          )}
          {selectedChatType === "contact" && renderDMMessages(message)}
        </div>
      );
    });
  };

  const renderDMMessages = (message) => {
    const isSender = message.sender === selectedChatData._id;
    return (
      <div
        className={` flex items-center ${
          isSender ? "justify-start" : "justify-end"
        } my-2 `}
      >
        {isSender && (
          <div
            style={{
              backgroundColor: isSender
                ? selectedChatData.avatarColor
                : "#D3D3D3",
              color: "black",
            }}
            className="flex-shrink-0 w-12 h-12 text-xl uppercase font-semibold flex items-center justify-center rounded-full mr-2"
          >
            {contactSelcted.name}
          </div>
        )}
        <div
          className={`max-w-[75%] rounded-3xl text-black py-2 px-4 relative ${
            isSender
              ? "bg-customGreen-300 text-black"
              : "bg-secondary-200 text-black"
          }`}
        >
          <span className="block">{message.content}</span>
          <span className="text-xs text-black mt-1 block text-right">
            {moment(message.timestamps).format("LT")}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="scrollbar-hidden w-full relative overflow-y-auto md:w-[66vw] lg:w-[70vw] mx-auto text-white p-4">
      {renderMessages()}
      <div ref={scrollScreenRef} />
    </div>
  );
};

export default RenderMessage;
