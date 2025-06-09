import { React } from "react";
import { ReviewForm } from "../review-form/review-form.jsx";
import { DishTableRow } from "./dish-table-row/dish-table-row.jsx";
import style from "./restaurant.module.css";
import { useSelector } from "react-redux";
import { selectRestautantById } from "../../../redux/entities/restaurants/slice.js";
import { selectDishesByIds } from "../../../redux/entities/dishes/slice.js";
import { selectReviewsByIds } from "../../../redux/entities/reviews/slice.js";
import { selectUsersByIds } from "../../../redux/entities/users/slice.js";

export const Restaurant = ({restaurantId}) => {
    const restaurant = useSelector((state) => selectRestautantById(state, restaurantId));
    const menu = useSelector((state) => selectDishesByIds(state, restaurant.menu));
    const reviews = useSelector((state) => selectReviewsByIds(state, restaurant.reviews));

    const menuTableRows = menu.map(({ id, name, price }) =>
        <DishTableRow key={id}
            name={name}
            price={price} />
    );

    const users = useSelector((state) => selectUsersByIds(state, reviews.map((review) => review.userId)));
    const reviewsListItems = [];
    for (let i = 0; i < reviews.length; i++) {
        const review = reviews[i];
        const user = users.find((user) => user.id == review.userId) || {};
        reviewsListItems.push(
            <li key={review.id}>
                {user.name} ({review.rating}): {review.text}
            </li>
        );
    }

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