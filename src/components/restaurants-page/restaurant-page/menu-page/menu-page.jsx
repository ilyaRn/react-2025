import { React } from "react";
import { useSelector } from "react-redux";
// import style from "./restaurants.module.css";
import { Outlet, useParams } from "react-router";
import { selectRestautantById } from "../../../../redux/entities/restaurants/slice";
import { DishTableRow } from "./dish-table-row/dish-table-row";

export const RestaurantMenuPage = () => {
    const { restaurantId } = useParams();
    const restaurant = useSelector((state) =>
        selectRestautantById(state, restaurantId)
    );

    const menuTableRows = restaurant.menu.map((id) => (
        <DishTableRow key={id} dishId={id} />
    ));

    return (
        <div>
            <h3>Menu</h3>
            <table>
                <tbody>{menuTableRows}</tbody>
            </table>
        </div>
    );
};
