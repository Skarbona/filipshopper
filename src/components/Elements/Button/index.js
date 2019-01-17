import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  text = "Button",
  icon = null,
  to = "",
  className = "",
  type = "",
  disabled = false,
  onClickButton = () => {}
}) => {
  const materialIcon = icon ? (
    <i className="material-icons right">{icon}</i>
  ) : null;

  return (
    <Link
      to={to}
      className={`btn waves-effect ${className}`}
      onClick={onClickButton}
      type={type}
      disabled={disabled}
    >
      {materialIcon}
      {text}
    </Link>
  );
};

export default Button;
