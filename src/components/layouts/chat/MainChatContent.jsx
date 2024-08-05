import React from "react";
import EmptychatSection from "./sections/EmptychatSection";
import ContactListSection from "./sections/ContactListSection";
import ChatContainer from "./ChatContainer";
import { useMediaquery } from "../../../hooks/useMediaQuerry";

const MainChatContent = () => {
  const isMobileview = useMediaquery(720);

  const Ischat = true;
  return (
    <main className="w-full h-full flex justify-between">
      <ContactListSection isMobileview={isMobileview} />
      {Ischat ? <ChatContainer /> : <EmptychatSection />}
    </main>
  );
};

export default MainChatContent;
