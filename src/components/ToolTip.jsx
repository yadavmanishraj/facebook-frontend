import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const ToolTip = ({ label, children }) => {
  const [showTip, setShowTip] = useState(false);
  const overflowElement = useRef(null);
  const overFlowInt = useRef(0);

  function handleMouseEnter(event) {
    setShowTip(true);
    overflowBy();
  }

  function handleMouseLeave(event) {
    setShowTip(false);
  }

  function overflowBy() {
    console.log(overflowElement.current.style.overflowX);
    const elem = document.querySelector("div");
    elem.clientWidth;
  }

  return (
    <div
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="grow h-full relative flex"
    >
      {children}
      <div
        ref={overflowElement}
        className="flex justify-center right-0 min-w-max absolute top-full"
      >
        <span
          className={` ${
            showTip ? "inline" : "hidden"
          } text-xs mt-1 font-medium bg-gray-700 bg-opacity-90 text-white py-1 px-2 rounded-md top-full z-50`}
        >
          {label ?? "Home"}
        </span>
      </div>
    </div>
  );
};

const positions = {
  topCenter: "",
  bottomCenter: "",
};

ToolTip.propTypes = {
  text: PropTypes.string,
  position: PropTypes.oneOf(Object.keys(positions)),
};

ToolTip.positions = positions;

export default ToolTip;
