import React from "react";

const Button = ({ label }) => {
  return (
    <button
      type="button"
      className="bg-cyan-700 font-sans font-medium text-white px-8 py-2 rounded-lg"
    >
      {label}
    </button>
  );
};

export default Button;
