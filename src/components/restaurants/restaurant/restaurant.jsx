import { React } from "react";
import { ReviewForm } from "../review-form/review-form.jsx";
import { DishTableRow } from "./dish-table-row/dish-table-row.jsx";
import style from "./restaurant.module.css";
import { useSelector } from "react-redux";
import { selectRestautantById } from "../../../redux/entities/restaurants/slice.js";
import { ReviewListItem } from "./review-list-item/review-list-item.jsx";


export const Restaurant = ({restaurantId}) => {
    const restaurant = useSelector((state) => selectRestautantById(state, restaurantId));

    const menuTableRows = restaurant.menu.map((id) =>
        <DishTableRow key={id} menuId={id} />
    );

    const reviewsListItems = restaurant.reviews.map((id) =>
        <ReviewListItem key={id} reviewId={id} />
    );

    return (
        <div className={style.restaurant}>
            <h3>Menu</h3>
            <table>
                <tbody>
                    {menuTableRows}
                </tbody>
            </table>
            <h3>Reviews</h3>
            <ul>                
                {reviewsListItems}
            </ul>   
            <ReviewForm />
        </div>
    );
};