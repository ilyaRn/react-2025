import {React} from "react";
import style from "./restaurants-tab.module.css";
import { Button } from "../../button/button";
import { useSelector } from "react-redux";
import { selectRestautantById } from "../../../redux/entities/restaurants/slice";

export const RestaurantsTab = ({restaurantId, activeRestaurant, onChangeRestaurant}) => {
    const restaurant = useSelector((state) => selectRestautantById(state, restaurantId));
    
    return (
        <Button
            title={restaurant.name}
            className={style.button}
            disabled={restaurantId === activeRestaurant}
            onClick={() => onChangeRestaurant(restaurantId)}
        />
    );
};