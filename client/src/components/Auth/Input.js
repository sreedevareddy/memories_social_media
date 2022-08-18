import React from "react";

const Input = ({type, autoFocus, name, label, placeholder, autoComplete}) => {
  return (
    <div className="grid_auth">
      <input autoComplete="off" placeholder={placeholder} required type={type} autoFocus={autoFocus} className="" name={name} label={label}  />
    </div>
  );
};

export default Input;