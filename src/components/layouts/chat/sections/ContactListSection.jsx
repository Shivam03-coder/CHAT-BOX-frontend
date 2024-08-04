import React from "react";
import Useravatar from "../../../shared/useravatar/Useravatar";
import { Chaticon } from "../../../../constants";
import { Typography } from "@material-tailwind/react";

const ContactListSection = ({ isMobileview }) => {
  return (
    <>
      <section
        className="h-screen overflow-y-auto relative w-[300px]
     scroll-smooth p-4 bg-black border-r border-customVogue-200 text-white hidden lg:block "
      >
        <div className="flex justify-center p-3">
          <Chaticon className="size-8 text-secondary-300" />
          <Typography variant="h4" className="text-secondary-400" >
            CHAT-BOX
          </Typography>
        </div>
      </section>
    </>
  );
};

export default ContactListSection;
