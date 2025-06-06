import {React} from "react";
import style from "./restaurants-tabs.module.css";
import { Button } from "../../button/button";

export const RestaurantsTabs = ({restaurants, activeRestaurant, onChangeRestaurant}) => {
    const tabs = restaurants.map(({id, name}) =>
        <Button key={id}
            title={name}
            className={style.button}
            disabled={id === activeRestaurant}
            onClick={() => onChangeRestaurant(id)}
        />
    );
    return (
        <div className={style.tabs}>
            {tabs}
        </div>
    );
};