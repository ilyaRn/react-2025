import {React} from "react";
import style from "./restaurants-tabs.module.css";

export const RestaurantsTabs = ({restaurants, activeRestaurant, onChangeRestaurant}) => {
    const tabs = restaurants.map(({id, name}) =>
        <button key={id}
            className={style.button}
            disabled={id === activeRestaurant}
            onClick={() => onChangeRestaurant(id)}>
            {name}
        </button>
    );
    return (
        <div className={style.tabs}>
            {tabs}
        </div>
    );
};