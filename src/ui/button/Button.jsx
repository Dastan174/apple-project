import React from "react";
import scss from "./button.module.scss";

const Button = ({ name }) => {
  return <button className={scss.button}>{name}</button>;
};

export default Button;
