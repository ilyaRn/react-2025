import { React } from "react";
import style from "./counter.module.css";
import { Button } from "../button/button";

export const Counter = ({min, max, value, onIncrease, onDecrease}) => {
    return (
        <div className={style.counter}>
            <Button 
                title="-"
                disabled={!Number.isInteger(min) || value <= min}
                onClick={onDecrease}
                />
            <span className={style.value}>{value}</span>
            <Button
                title="+"
                disabled={!Number.isInteger(max) || value >= max}
                onClick={onIncrease}
                />
        </div>
    );
};