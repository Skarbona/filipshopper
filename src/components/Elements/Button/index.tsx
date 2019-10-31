import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  text = "Button",
  icon = null,
  to = "",
  className = "",
  type = "",
  disabled = false,
  onClickButton = () => { }
}) => (
  <Link
    to={to}
    className={`btn waves-effect ${className}`}
    onClick={onClickButton}
    type={type}
  >
    {icon && <i className="material-icons right">{icon}</i>}
    {text}
  </Link> // TODO: Now we cannot disable button!!!!!!!!!
);


export default Button;
