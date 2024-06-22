import React from "react";

import globe from "../assets/icons/globe.svg";
import Reactions from "./Reactions";

const Post = ({ contentImage, description }) => {
  return (
    <div className="bg-white rounded-md my-4 shadow-sm border-post">
      <div className="flex px-4 py-3 gap-2">
        <div className="">
          <img
            className="size-10 rounded-full border-2 border-blue-600 p-0.5 cursor-pointer hover:bg-gray-300"
            src="https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-1/409443101_122102863556143303_4797673944044128260_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ehOlLquWnjYQ7kNvgGYQRU4&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYDm8uMyi4SBve1XJ66XQ_hLNNFRh284C1SGR9FmC8l9Zg&oe=667C2054"
          />
        </div>
        <div className="info flex gap-1 flex-col">
          <div className="flex gap-2">
            <div className="font-semibold">InfoGram</div>
            <span>•</span>
            <div className="font-semibold text-blue-600 hover:underline cursor-pointer">
              Follow
            </div>
          </div>
          <div className="date">
            <div className="text-xs text-gray-500 flex gap-2">
              <span>2 days ago </span>
              <img src={globe} alt="Globe" />
            </div>
          </div>
        </div>
        <div className="more"></div>
      </div>
      <div className="px-4 pb-2">
        {description ??
          `The Miyazaki mango, nicknamed the "Sun Egg" for its vibrant color and
        egg-like shape, holds the crown for the world's most expensive mango.
        more`}
      </div>
      <div className="content">
        <img
          src={`${
            contentImage ??
            "https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-6/448793563_476637334874816_645761784944422948_n.jpg?stp=dst-jpg_p526x296&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JBWn4-gAdpQQ7kNvgEsV31g&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYB3XBuX4QB4x35U6cIqUd9ZAfRrlPKYVivNSzVCON9dfg&oe=667C3DFC"
          }`}
        />
      </div>
      <Reactions />
    </div>
  );
};

export default Post;
