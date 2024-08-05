import React from "react";
import ProfileContainer from "../layouts/profile/ProfileContainer";
import ContourSvg from "../shared/svgs/ContourSvg";

function Publicprofilepage() {
  return (
    <div className="bg-black min-h-screen w-full text-white overflow-hidden flex-center">
      <ContourSvg />
      <ProfileContainer />
    </div>
  );
}

export default Publicprofilepage;
