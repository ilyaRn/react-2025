import { React, useContext} from "react";
import classNames from "classnames";
import { ThemeContext } from "../contexts/theme-context";
import style from "./button.module.css";


export const Button = ({title, onClick, disabled, className}) => {
    const {theme} = useContext(ThemeContext);

    return (
        <button
            className={classNames(className, {
                [style.dark]: theme === "dark",
            })}
            disabled={disabled}
            onClick={onClick}>
            {title}
        </button>
    );
};