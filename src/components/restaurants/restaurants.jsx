import { React, useState } from "react";
import { restaurants } from "../../../materials/datas.js";
import { RestaurantsTabs } from "./restaurants-tabs/restaurants-tabs.jsx";
import { Restaurant } from "./restaurant/restaurant.jsx";



export const Restaurants = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0].id);
    const restaurant = restaurants.find((r) => r.id == activeRestaurantId);
    return (
        <div>
            <RestaurantsTabs
                restaurants={restaurants}
                activeRestaurant={activeRestaurantId}
                onChangeRestaurant={setActiveRestaurantId}
            />
            <Restaurant
                restaurant={restaurant}
            />        
        </div>
    );
};