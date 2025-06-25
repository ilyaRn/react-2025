import { React } from "react";
import { selectRestautantById } from "../../../redux/entities/restaurants/slice.js";
import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router";
import { TabLink } from "./tab-link.jsx";


export const RestaurantPage = () => {
    const { restaurantId } = useParams();
    const restaurant = useSelector((state) =>
        selectRestautantById(state, restaurantId)
    );

    if (!restaurant) {
        return null;
    }

    return (
        <div>
            <center>
                <h3>{restaurant.name}</h3>
                <TabLink to="menu" title="Menu" />
                <TabLink to="reviews" title="Reviews" />
            </center>
            <Outlet />
        </div>
    );
};
