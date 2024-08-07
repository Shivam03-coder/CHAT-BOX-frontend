import React from "react";
import Useravatar from "../../../shared/useravatar/Useravatar";
import { ChatIcon } from "../../../../constants";
import { Typography } from "@material-tailwind/react";
import ProfileinfoSection from "./ProfileinfoSection";
import DirectmessageSection from "./DirectmessageSection";
import ChannelsSection from "./ChannelsSection";

const ContactListSection = ({ isMobileview }) => {
  return (
    <>
      <section
        className="min-h-screen overflow-y-auto relative min-w-[330px]
     scroll-smooth  bg-black border-r border-customVogue-200 text-white hidden lg:block "
      >
        <div className="flex justify-center items-center gap-3 p-3">
          <ChatIcon className="size-8 text-secondary-300" />
          <Typography variant="h4" className="text-secondary-400">
            CHAT-BOX
          </Typography>
        </div>
        <DirectmessageSection />
        <ChannelsSection />
        <ProfileinfoSection />
      </section>
    </>
  );
};

export default ContactListSection;
