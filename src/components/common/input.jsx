import React from "react";

const Input = ({
  id,
  type = "text",
  label = "Input label",
  placeholder = "Enter text",
  onChange,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        onChange={(test) => onChange(test)}
      />
    </div>
  );
};

export default Input;
