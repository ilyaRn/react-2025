import { React, useState, useContext } from "react";
import { Counter } from "../../../counter/counter.jsx";
import style from "./dish-table-row.module.css";
import { AuthContext } from "../../../contexts/auth-context/index.jsx";


export const DishTableRow = ({name, price}) => {
    const [dishCounter, setDishCounter] = useState(0);
    const {auth} = useContext(AuthContext);

    return <tr className={style.dish}>
        <td>{name}</td>
        <td>{price}</td>
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