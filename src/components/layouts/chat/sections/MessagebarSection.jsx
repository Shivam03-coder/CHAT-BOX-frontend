import { Button, IconButton } from "@material-tailwind/react";
import React, { useRef } from "react";
import { Attachment, Emojipicker, Sendmsgicon } from "../../../../constants";

const MessagebarSection = () => {
  const Messageref = useRef(null);

  const handleChange = () => {
    if (Messageref.current) {
      console.log(Messageref.current.value);
    }
  };
  return (
    <section
      className="h-[14vh] border-t  flex-center
     border-customVogue-200 flex items-center text-white px-5"
    >
      <div className="flex-1 flex items-center px-4  rounded-2xl bg-blue-gray-900 mx-4">
        <Attachment className="size-8 text-customOrange-500" />
        <input
          placeholder="Enter your message...."
          className="flex-1 outline-none p-4 bg-transparent font-Inter text-lg "
          ref={Messageref}
          onChange={handleChange}
        />
        <Emojipicker className="size-8 text-customYellow-300 relative left-2" />
      </div>
      <Button className=" flex-center px-3">
        <Sendmsgicon className="size-8 text-secondary-300" />
      </Button>
    </section>
  );
};

export default MessagebarSection;
