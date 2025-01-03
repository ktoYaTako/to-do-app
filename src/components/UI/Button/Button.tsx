import React from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import classes from "./Button.module.css";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({ onClick, children }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      {children === "Добавить" ? <FaPlus /> : <MdOutlineDeleteSweep />}
      {children}
    </button>
  );
};

export default Button;
