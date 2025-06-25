import { React } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectRestautantById } from "../../../../redux/entities/restaurants/slice";
import { ReviewListItem } from "./review-list-item/review-list-item";
import { ReviewForm } from "./review-form/review-form";

export const RestaurantReviewsPage = () => {
    const { restaurantId } = useParams();
    const restaurant = useSelector((state) =>
        selectRestautantById(state, restaurantId)
    );
    const reviewsListItems = restaurant.reviews.map((id) => (
        <ReviewListItem key={id} reviewId={id} />
    ));

    return (
        <div>
            <h3>Reviews</h3>
            <ul>{reviewsListItems}</ul>
            <ReviewForm />
        </div>
    );
};
