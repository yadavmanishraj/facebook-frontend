import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import Tab from "../components/Tab";

import search from "../assets/icons/search.svg";
import facebook from "../assets/icons/facebook.svg";
import homeFilled from "../assets/icons/home_filled.svg";
import friends from "../assets/icons/friends.svg";
import marketplace from "../assets/icons/marketplace.svg";
import watch from "../assets/icons/watch.svg";
import groups from "../assets/icons/groups.svg";
import ToolTip from "../components/ToolTip";

const HeaderLayout = () => {
  return (
    <div className="">
      <div className="flex h-14 items-center px-4 gap-8 shadow-2xl">
        <div className="left flex gap-2">
          <img src={facebook} />
          <div className="search pl-3 rounded-full bg-slate-100 flex items-center justify-center">
            <img src={search} />
            <input
              placeholder="Search Facebook"
              className="px-2 bg-transparent border-none outline-none"
            />
          </div>
        </div>

        <div className="middle flex flex-grow justify-center h-full items-center gap-3 py-1 mx-10">
          <ToolTip label={"Home"}>
            <Tab className="flex-grow h-full items-center flex justify-center rounded-md">
              <img src={homeFilled} />
            </Tab>
          </ToolTip>
          <ToolTip label={"Friends"}>
            <Tab className="flex-grow h-full items-center flex justify-center rounded-md">
              <img src={friends} />
            </Tab>
          </ToolTip>

          <ToolTip label={"Facebook Watch"}>
            <Tab className="flex-grow h-full items-center flex justify-center rounded-md">
              <img src={watch} />
            </Tab>
          </ToolTip>
          <ToolTip label={"Marketplace"}>
            <Tab className="flex-grow h-full items-center flex justify-center rounded-md">
              <img src={marketplace} />
            </Tab>
          </ToolTip>
          <ToolTip label={"Groups"}>
            <Tab className="flex-grow h-full items-center flex justify-center rounded-md">
              <img src={groups} />
            </Tab>
          </ToolTip>
        </div>

        <div className="right flex gap-2">
          <ToolTip label={"Menu"}>
            <Tab className="flex-grow bg-gray-200 h-10 aspect-square flex items-center justify-center rounded-full">
              <BsFillGrid3X3GapFill size={20} />
            </Tab>
          </ToolTip>
          <ToolTip label={"Messenger"}>
            <Tab className="flex-grow bg-gray-200 h-10 aspect-square flex items-center justify-center rounded-full">
              <FaFacebookMessenger size={20} />
            </Tab>
          </ToolTip>
          <ToolTip label={"Notifications"}>
            <Tab className="flex-grow bg-gray-200 h-10 aspect-square flex items-center justify-center rounded-full">
              <IoNotifications size={20} />
            </Tab>
          </ToolTip>
          <ToolTip label={"Account"}>
            <Tab className="flex-grow bg-gray-200 h-10 aspect-square flex items-center justify-center rounded-full">
              <FaUserFriends size={20} />
            </Tab>
          </ToolTip>
        </div>
      </div>
      <hr className="border-t-2" />
    </div>
  );
};

export default HeaderLayout;
