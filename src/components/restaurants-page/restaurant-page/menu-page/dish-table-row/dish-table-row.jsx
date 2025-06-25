import { React, useContext } from "react";
import style from "./dish-table-row.module.css";
import { AuthContext } from "../../../../contexts/auth-context/index.jsx";
import { selectDishById } from "../../../../../redux/entities/dishes/slice.js";
import { useSelector } from "react-redux";
import { DishCounter } from "../../../../dish-counter/dish-counter.jsx";
import { NavLink } from "react-router";

export const DishTableRow = ({ dishId }) => {
    const { auth } = useContext(AuthContext);
    const dish = useSelector((state) => selectDishById(state, dishId));

    return (
        <tr className={style.dish}>
            <td>
                <NavLink to={`/dish/${dish.id}`}>{dish.name}</NavLink>
            </td>
            <td>{dish.price}</td>
            {auth.username ? (
                <td>
                    <DishCounter min={0} max={10} dishId={dish.id} />
                </td>
            ) : null}
        </tr>
    );
};
