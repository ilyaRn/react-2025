import { React } from "react";
import { ReviewForm } from "../review-form/review-form.jsx";
import { Counter } from "../../counter/counter.jsx";

const css = {
    td: {
        "padding": "1rem",
    },
};

export const Restaurant = ({restaurant}) => {
    if (!restaurant) {
        return null;
    }
    const menuTableRows = restaurant.menu.map(({ id, name, price }) =>        
        <tr key={id}>
            <td style={css.td}>{name}</td>
            <td style={css.td}>{price}</td>            
            <td style={css.td}><Counter min={0} max={5}/></td>
        </tr>
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