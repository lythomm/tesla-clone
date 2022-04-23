import React from "react";
import "./Button.css";

const Button = ({ imp, text, link }) => {
  return (
    <a
      className={`button ${imp === "secondary" ? "button__white" : ""}`}
      href={link}
    >
      {text}
    </a>
  );
};

export default Button;
