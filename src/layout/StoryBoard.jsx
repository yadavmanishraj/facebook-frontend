import React, { useEffect, useRef, useState } from "react";
import Story from "../components/Story";

import arrowLeft from "../assets/icons/arrow_left.svg";
import arrowRight from "../assets/icons/arrow_right.svg";
import add from "../assets/icons/add.svg";

const CreateStory = () => {
  return (
    <div className="flex flex-col h-full min-w-40 bg-white cursor-pointer shadow-sm rounded-md relative">
      <img
        className=" flex-grow object-cover rounded-t-md"
        src="https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-1/323865521_881885726336087_8629759451789208128_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=btq1pXShWaUQ7kNvgGqlhls&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYA7Y_q5d50jS05LSYH41tLUeR7zqMNYtpvEMEKbGxHkGw&oe=667C956C"
        alt=""
      />
      <span className="text-center relative flex items-end pb-3 justify-center h-14 font-semibold">
        <div className="bg-white p-1 rounded-full absolute -top-4">
          <div className="create bg-blue-600 rounded-full p-1">
            <img src={add} alt="" />
          </div>
        </div>
        <span className="text-sm">Create Story</span>
      </span>
    </div>
  );
};

const StoryBoard = () => {
  const storyBoardRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  let scrollListenerHandle;

  function handleScrollPosition() {
    scrollListenerHandle = storyBoardRef.current.addEventListener(
      "scroll",
      (e) => {
        const scrollPosition = e.srcElement.scrollLeft;
        if (scrollPosition > 5) {
          setShowLeftArrow(true);
        } else {
          setShowLeftArrow(false);
        }
      }
    );
  }

  useEffect(() => {
    handleScrollPosition();
    return removeEventListener("scroll", scrollListenerHandle);
  }, []);

  function handleLeftArrowClick() {
    storyBoardRef.current.scroll(144, 0);
  }

  return (
    <div className="relative">
      {showLeftArrow && (
        <div
          onClick={handleLeftArrowClick}
          className="left-arrow absolute cursor-pointer z-50 top-24 left-5 bg-white p-4 rounded-full shadow-lg border-post"
        >
          <img src={arrowLeft} alt="" />
        </div>
      )}
      <div className="left-arrow absolute z-50 top-24 right-5 bg-white p-4 rounded-full shadow-lg border-post">
        <img src={arrowRight} alt="" />
      </div>
      <div
        ref={storyBoardRef}
        className="flex h-72 overflow-scroll  w-full gap-2 pb-2"
      >
        <CreateStory />
        <Story
          user={"Ashraph"}
          image={
            "https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-6/448579821_1606874136778255_7371817183224392520_n.jpg?stp=cp6_dst-jpg_s720x720&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PCHdHVlEdogQ7kNvgGJyI_4&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYBl9RiNQrgKVjAzG_P6T513gllCkeO2Vya8Ns3WPly-iQ&oe=667C5486"
          }
          avatarImage={
            "https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-1/305809472_4815952771837562_6586659425500683303_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WzzjfqjwWSkQ7kNvgEm_hjk&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYBJaA02YLJ-IuTdNk818FlZCJXdi6St6LxiysBdjowLxA&oe=667C468F"
          }
        />
        <Story
          user={"Mukandha"}
          image={
            "https://scontent.fjkr2-1.fna.fbcdn.net/v/t1.6435-9/67181366_2399197613631645_8761372257479032832_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xPCXAvLNxFIQ7kNvgHJhqQf&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYB-1kg4fA5uuqJp3VXFdtdrRp2g0TmNoDXrGmV40uQXew&oe=669DEEA4"
          }
          avatarImage={
            "https://scontent.fjkr2-1.fna.fbcdn.net/v/t1.6435-1/72922232_2484299398454799_5241967061751562240_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RW332XBfLT8Q7kNvgG8WtOF&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYA2GZY2fjgJ7VVP_VD-A0QHxsULaCYxIQ0ZWULHPZJBDA&oe=669E0336"
          }
        />
        <Story
          avatarImage={
            "https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-1/444839255_122100174308333409_4374526491103831693_n.jpg?stp=c0.30.200.200a_dst-jpg_p200x200&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-JX4Mtat4WoQ7kNvgE4jAlW&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYC309-v7QoR_uV5fU6KereFKtVO63RGI2UDYzDXjkkhjQ&oe=667C93AD"
          }
          image={
            "https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-6/448073324_508592631735862_2153490500521673786_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lSbMEy94EXMQ7kNvgGi20N2&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYC76skmm-JPkY8gLWcLO8ELEAVPwP-GBIFv_w9B1WpfNA&oe=667C5C0A"
          }
        />
        <Story
          user={"Sindhu Poudel"}
          avatarImage={
            "https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-6/448214265_508592591735866_2849184842087607924_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3dNVR2uo4JAQ7kNvgG__8jq&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYAu0l7o0ywNa_CwfPEqwfM4kplR3ye0GRFH9hdSZZ8LEA&oe=667C4425"
          }
          image={
            "https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-6/448214265_508592591735866_2849184842087607924_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3dNVR2uo4JAQ7kNvgG__8jq&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYAu0l7o0ywNa_CwfPEqwfM4kplR3ye0GRFH9hdSZZ8LEA&oe=667C4425"
          }
        />
        <Story
          user={"Jaswin Adhikari"}
          avatarImage={
            "https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-6/379183719_315122707958207_1418052386561407400_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=amv4qEfY5AIQ7kNvgH5fNcq&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYCfBAwwViaFu7WtSWAgMTV-C-4zG28mQGjDdUQVKZmAiA&oe=667C451C"
          }
          image={
            "https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-6/374535922_1273943723264656_3763032630124067750_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kGFkWCXqM4AQ7kNvgEGP8Rl&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYCTo7oW26bqJYjr_iP15DMNIfyX3uXnvJHufw0xWPPOqw&oe=667C5FA7"
          }
        />
      </div>
    </div>
  );
};

export default StoryBoard;
