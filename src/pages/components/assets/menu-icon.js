import React from "react";

function MenuIcon() {
  
  return (
    <svg
      width="40px"
      className="ham hamRotate ham4"
      onClick={() => document.querySelector(".hamRotate").classList.toggle('active')}
      viewBox="0 0 100 100"
    >
      <path
        d="M70 33H30s-8.5-.15-8.5 8.5S30 50 30 50h20V30"
        className="line top"
      ></path>
      <path d="M70 50H30" className="line middle"></path>
      <path
        d="M30 67h40s8.5.15 8.5-8.5S70 50 70 50H50v20"
        className="line bottom"
      ></path>
    </svg>
  );
}

export default MenuIcon;