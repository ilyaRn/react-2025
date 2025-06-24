import { React } from "react";
import { selectRestautantById } from "../../../redux/entities/restaurants/slice.js";
import { useSelector } from "react-redux";
import { NavLink, Outlet, useParams } from "react-router";
import style from './restaurant-page.module.css';


export const RestaurantPage = () => {
    const {restaurantId} = useParams();
    const restaurant = useSelector((state) => selectRestautantById(state, restaurantId));

    if (!restaurant) {
        return null;
    }

    return (
        <div>
            <center>
                <h3>{restaurant.name}</h3>
                <NavLink to="menu"
                    className={({isActive}) => isActive ? style.linkActive : style.link}>
                    Menu
                </NavLink>
                <NavLink to="reviews"
                    className={({isActive}) => isActive ? style.linkActive : style.link}>
                    Reviews
                </NavLink>
            </center>
            <Outlet />
        </div>
    );
};