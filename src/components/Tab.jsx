import React from "react";

const Tab = ({ children, className }) => {
  return (
    <div
      className={`cursor-pointer hover:bg-gray-300 transition ${className} `}
    >
      {children}
    </div>
  );
};

export default Tab;
