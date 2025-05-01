import React from "react";

function Button({ btnText, onHandleClick, className, disabled }) {
  return (
    <button
      onClick={onHandleClick}
      className={`px-4 py-2 rounded ${className}`}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
}

export default Button;
