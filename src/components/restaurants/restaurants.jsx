import { React, useState } from "react";
import { RestaurantsTab } from "./restaurants-tab/restaurants-tab.jsx";
import { Restaurant } from "./restaurant/restaurant.jsx";
import { selectRestautantIds } from "../../redux/entities/restaurants/slice.js";
import { useSelector } from "react-redux";
import style from "./restaurants.module.css";


export const Restaurants = () => {
    const restaurants = useSelector(selectRestautantIds);
    const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0]);

    return (
        <div>
            <div className={style.tabs}>
                {restaurants.map((id) =>
                    <RestaurantsTab key={id}
                        restaurantId={id}
                        activeRestaurant={activeRestaurantId}
                        onChangeRestaurant={setActiveRestaurantId}
                    />
                )}
            </div>
            {Array.from({length:7}, (_, index) => 
                <Restaurant
                    key={index}
                    restaurantId={activeRestaurantId}
                />
            )}        
        </div>
    );
};