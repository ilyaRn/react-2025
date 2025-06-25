import { React } from "react";
import { useSelector } from "react-redux";
import { selectRestautantById } from "../../../redux/entities/restaurants/slice";
import { NavLink } from "react-router";
import style from "./restaurants-tab.module.css";

export const RestaurantsTab = ({ restaurantId }) => {
    const restaurant = useSelector((state) =>
        selectRestautantById(state, restaurantId)
    );

    return (
        <NavLink
            className={({ isActive }) =>
                isActive ? style.restaurantLinkActive : style.restaurantLink
            }
            to={restaurantId}
        >
            {restaurant.name}
        </NavLink>
    );
};
