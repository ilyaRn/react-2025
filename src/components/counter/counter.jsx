import { React } from "react";

const css = {
    value: {
        padding: "0 1rem",
    },
};

export const Counter = ({min, max, value, onIncrease, onDecrease}) => {
    return (
        <div>
            <button 
                disabled={!Number.isInteger(min) || value <= min}
                onClick={onDecrease}>-</button>
            <span style={css.value}>{value}</span>
            <button 
                disabled={!Number.isInteger(max) || value >= max}
                onClick={onIncrease}>+</button>        
        </div>
    );
};