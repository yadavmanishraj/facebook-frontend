import React from "react";
import Tab from "./Tab";

const Reactions = ({ className }) => {
  return (
    <div className={` p-2 w-full flex ${className} justify-around`}>
      <Tab>
        <div className="flex gap-2 px-2 py-1 items-center">
          <div className="bg-reaction-bg size-5  bg-like"></div>
          <div className="font-semibold text-gray-900">Like</div>
        </div>
      </Tab>
      <Tab>
        <div className="flex gap-2 px-2 py-1 items-center">
          <div className="bg-reaction-bg size-5  bg-comment"></div>
          <div className="font-semibold text-gray-900">Comment</div>
        </div>
      </Tab>
      <Tab>
        <div className="flex gap-2 px-2 py-1 items-center">
          <div className="bg-reaction-bg size-5  bg-copy"></div>
          <div className="font-semibold text-gray-900">Copy</div>
        </div>
      </Tab>
      <Tab>
        <div className="flex gap-2 px-2 py-1 items-center">
          <div className="bg-reaction-bg size-5  bg-share"></div>
          <div className="font-semibold text-gray-900">Share</div>
        </div>
      </Tab>
    </div>
  );
};

export default Reactions;
