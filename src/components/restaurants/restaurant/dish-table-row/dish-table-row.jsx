import { React, useState } from "react";
import { Counter } from "../../../counter/counter.jsx";
import style from "./dish-table-row.module.css";


export const DishTableRow = ({name, price}) => {
    const [dishCounter, setDishCounter] = useState(0);
    return <tr className={style.dish}>
        <td>{name}</td>
        <td>{price}</td>            
        <td>
            <Counter min={0} max={5}
                value={dishCounter}
                onIncrease={() => setDishCounter(dishCounter + 1)}
                onDecrease={() => setDishCounter(dishCounter - 1)}
            />
        </td>
    </tr>;
};