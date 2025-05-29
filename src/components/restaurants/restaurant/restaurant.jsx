import { React } from "react";
import { ReviewForm } from "../review-form/review-form.jsx";
import { DishTableRow } from "./dish-table-row/dish-table-row.jsx";

export const Restaurant = ({restaurant}) => {
    if (!restaurant) {
        return null;
    }    
    const menuTableRows = restaurant.menu.map(({ id, name, price }) =>
        <DishTableRow key={id}
            name={name}
            price={price} />
    );
    const reviewsListItems = restaurant.reviews.map(({id, user, text, rating}) =>
		<li key={id}>
			{user} ({rating}): {text}
		</li>
	);

    return (
        <div>
            <h3>Меню</h3>
            <table>
                <tbody>
                    {menuTableRows}
                </tbody>
            </table>
            <h3>Отзывы</h3>
            <ul>                
                {reviewsListItems}
            </ul>
            <ReviewForm />
        </div>
    );
};