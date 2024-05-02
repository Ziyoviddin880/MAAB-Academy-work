import React from "react";

const Input = ({ placeholder }) => {
  return (
    <input
      className="w-100 border-0 bg-body-secondary p-2 rounded-3 "
      type="text"
      required
      placeholder={placeholder}
    />
  );
};

export default Input;
