import { Typography } from "@material-tailwind/react";
import { Discuss } from "react-loader-spinner";

function Chatloading() {
  return (
    <div className="w-full min-h-screen bg-black flex-center flex flex-col md:flex-row gap-2 ">
      <Discuss
        visible={true}
        height="130"
        width="130"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#FF71CD"
        backgroundColor="#F4442E"
          />
           <Typography className="text-secondary-300" variant="h2" >
        WELOCOME TO <br /> CHAT BOX
      </Typography>
    </div>
  );
}

export default Chatloading;
