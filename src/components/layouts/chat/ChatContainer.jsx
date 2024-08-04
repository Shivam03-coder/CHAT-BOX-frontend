import React from "react";
import ChatheaderSection from "./sections/ChatheaderSection";
import MessagebarSection from "./sections/MessagebarSection";
import UserchatsSection from "./sections/UserchatsSection";

const ChatContainer = () => {
  return (
    <section className="fixed top-0 h-screen w-full flex flex-col md:static md:flex-1 bg-black">
      <ChatheaderSection />
      <UserchatsSection />
      <MessagebarSection />
    </section>
  );
};

export default ChatContainer;
