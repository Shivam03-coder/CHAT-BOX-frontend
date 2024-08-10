import React, { useEffect, useState } from "react";
import { ChatIcon } from "../../../../constants";
import { Typography } from "@material-tailwind/react";
import ProfileinfoSection from "./ProfileinfoSection";
import DirectmessageSection from "./DirectmessageSection";
import ChannelsSection from "./ChannelsSection";
import { useGetContactlistQuery } from "../../../../redux/endpoints/userauth";
import LastmsgContactSection from "./LastmsgContactSection";
import { getRandomColor } from "../../../../utils/getRandomcolorCode";
import { useSelector } from "react-redux";

const ContactListSection = () => {
  const { data } = useGetContactlistQuery();
  const [contactList, setContactList] = useState([]);
  const { selectedChatData } = useSelector(
    (state) => state.chats
  );

  useEffect(() => {
    if (data) {
      const updatedContactList = data.map((contactInfo) => ({
        ...contactInfo,
        avatarColor: getRandomColor(),
      }));
      setContactList(updatedContactList);
    }
  }, [data]);

  return (
    <>
      <section
        className="min-h-screen overflow-y-auto relative text-left min-w-[330px]
     scroll-smooth bg-primary-950 text-white hidden lg:block "
      >
        <div className="flex justify-center items-center gap-3 p-3">
          <ChatIcon className="size-8 text-secondary-300" />
          <Typography variant="h4" className="text-secondary-400">
            CHAT-BOX
          </Typography>
        </div>
        <DirectmessageSection />
        <LastmsgContactSection
          selectedChatData={selectedChatData}
          contactList={contactList}
        />
        <ChannelsSection />
        <ProfileinfoSection />
      </section>
    </>
  );
};

export default ContactListSection;
