import { React } from "react";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../../../../redux/entities/reviews/slice";
import { selectUserById } from "../../../../../redux/entities/users/slice";


export const ReviewListItem = ({reviewId}) => {
    const review =  useSelector((state) => selectReviewById(state, reviewId));
    const user = useSelector((state) => selectUserById(state, review.userId));

    return <li>
        {user.name} ({review.rating}): {review.text}
    </li>;
};