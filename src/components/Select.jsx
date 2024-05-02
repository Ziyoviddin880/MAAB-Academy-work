import React from "react";

const Select = ({ option }) => {
  return (
    <select
      className="form-select border-0 bg-body-secondary p-2 "
      aria-label="Default select example"
    >
      {option.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Select;
