import React, { useState } from "react";
import ToolTip from "./ToolTip";

const NavItem = ({ icon, label, selected = false, className }) => {
  const [showTip, setShowTip] = useState(false);

  function handleMouseEnter(event) {
    setShowTip(true);
  }

  function handleMouseLeave(event) {
    setShowTip(false);
  }

  return (
    <div className="grow min-h-full relative flex">
      <a
        href="#"
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`${className} ${selected && "border-accent border-b-1"} ${
          !selected && "hover:bg-gray-100 rounded-md my-1"
        } relative  flex flex-col grow items-center justify-center  `}
      >
        {icon}
      </a>
      <div className="flex justify-center absolute w-full top-full items-center">
        <span
          className={` ${
            showTip ? "inline" : "hidden"
          } text-xs mt-1 bg-gray-700 text-white py-1 px-2 rounded-md top-full   z-50`}
        >
          {label ?? "Home"}
        </span>
      </div>
    </div>
  );
};

export default NavItem;
