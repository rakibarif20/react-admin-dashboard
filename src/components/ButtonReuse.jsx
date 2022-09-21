import React from "react";

const ButtonReuse = ({ color, bgColor, size, text, borderRadius }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color: color, borderRadius: borderRadius }}
      className={`text${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default ButtonReuse;
