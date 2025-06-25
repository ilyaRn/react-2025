import { React } from "react";
import style from "./dish-counter.module.css";
import { Button } from "../button/button";
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    removeFromCart,
    selectCartItemAmount,
} from "../../redux/entities/cart/slice";

export const DishCounter = ({ min = 0, max = 10, dishId }) => {
    const dispatch = useDispatch();
    const amount = useSelector((state) => selectCartItemAmount(state, dishId));
    return (
        <div className={style.counter}>
            <Button
                title="-"
                disabled={!Number.isInteger(min) || amount <= min}
                onClick={() => dispatch(removeFromCart(dishId))}
            />
            <span className={style.value}>{amount}</span>
            <Button
                title="+"
                disabled={!Number.isInteger(max) || amount >= max}
                onClick={() => dispatch(addToCart(dishId))}
            />
        </div>
    );
};
