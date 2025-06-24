import { React } from "react";
import { RestaurantsTab } from "./restaurants-tab/restaurants-tab.jsx";
import { selectRestautantIds } from "../../redux/entities/restaurants/slice.js";
import { useSelector } from "react-redux";
import style from "./restaurants.module.css";
import { Outlet } from "react-router";


export const RestaurantsPage = () => {
    const restaurants = useSelector(selectRestautantIds);

    return (
        <>
            <div className={style.tabs}>
                {restaurants.map((id) =>
                    <RestaurantsTab key={id} restaurantId={id} />
                )}
            </div>            
            <Outlet />
        </>
    );
};