import { React } from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/entities/cart/slice";
import style from "./cart.module.css";

export const Cart = () => {
    const items = useSelector(selectCartItems);
    if (!items.length) {
        return null;
    }
    const itemsLi = items.map(({ id, amount, dishName }) => (
        <li key={id}>
            {dishName}:{amount}
        </li>
    ));
    return (
        <div className={style.cart}>
            <h4>Cart:</h4>
            <ul>{itemsLi}</ul>
        </div>
    );
};
