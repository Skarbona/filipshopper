import React from "react";
import { Link } from "react-router-dom";

import { IButtonProps } from "./Button.interface";

const Button = ({
  text = "Button",
  icon = "",
  to = "",
  className = "",
  type = "",
  disabled = false,
  onClickButton = () => { }
}: IButtonProps) => (
  <Link
    to={to}
    className={`btn waves-effect ${className} ${disabled && "disabled"}`}
    onClick={onClickButton}
    type={type}
  >
    {icon && <i className="material-icons right">{icon}</i>}
    {text}
  </Link>
);


export default Button;
