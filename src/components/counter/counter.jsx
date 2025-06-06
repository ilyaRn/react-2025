import { React } from "react";
import style from "./counter.module.css";

export const Counter = ({min, max, value, onIncrease, onDecrease}) => {
    return (
        <div className={style.counter}>
            <button 
                disabled={!Number.isInteger(min) || value <= min}
                onClick={onDecrease}>-</button>
            <span>{value}</span>
            <button 
                disabled={!Number.isInteger(max) || value >= max}
                onClick={onIncrease}>+</button>        
        </div>
    );
};