import { React, useState, useContext } from "react";
import { Counter } from "../../../counter/counter.jsx";
import style from "./dish-table-row.module.css";
import { AuthContext } from "../../../contexts/auth-context/index.jsx";
import { selectDishById } from "../../../../redux/entities/dishes/slice.js";
import { useSelector } from "react-redux";


export const DishTableRow = ({menuId}) => {
    const [dishCounter, setDishCounter] = useState(0);
    const {auth} = useContext(AuthContext);
    const dish =  useSelector((state) => selectDishById(state, menuId));


    return <tr className={style.dish}>
        <td>{dish.name}</td>
        <td>{dish.price}</td>
        {auth.username ?
            <td>
                <Counter min={0} max={5}
                    value={dishCounter}
                    onIncrease={() => setDishCounter(dishCounter + 1)}
                    onDecrease={() => setDishCounter(dishCounter - 1)}
                />
            </td>
        : null}
    </tr>;
};