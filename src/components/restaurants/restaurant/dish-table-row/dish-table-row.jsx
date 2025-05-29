import { React, useState } from "react";
import { Counter } from "../../../counter/counter.jsx";

const css = {
    td: {
        "padding": "1rem",
    },
};

export const DishTableRow = ({name, price}) => {
    const [dishCounter, setDishCounter] = useState(0);
    return <tr>
        <td style={css.td}>{name}</td>
        <td style={css.td}>{price}</td>            
        <td style={css.td}>
            <Counter min={0} max={5}
                value={dishCounter}
                onIncrease={() => setDishCounter(dishCounter + 1)}
                onDecrease={() => setDishCounter(dishCounter - 1)}
            />
        </td>
    </tr>;
};