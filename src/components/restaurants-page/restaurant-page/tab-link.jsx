import { React } from "react";
import { NavLink } from "react-router";
import style from "./tab-link.module.css";

export const TabLink = ({to, title}) => {
    return <NavLink
        to={to}
        className={({ isActive }) => (isActive ? style.linkActive : style.link)}
    >{title}</NavLink>;
};
