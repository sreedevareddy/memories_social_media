import React from "react";

const Input = ({type, autoFocus, name, label, placeholder, handleChange}) => {
  return (
    <div className="grid_auth">
      <input autoComplete="new-off" placeholder={placeholder} required type={type} autoFocus={autoFocus} className="" name={name} label={label} onChange={handleChange}  />
    </div>
  );
};

export default Input;