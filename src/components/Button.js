import React from "react";
import "../css/Button.css";

function Button({ children, isActive, ...props }) {
  return (
    <div className="btn">
      <button {...props} className={isActive ? "button active" : "button"}>
        {children}
      </button>
    </div>
  );
}

export default Button;
