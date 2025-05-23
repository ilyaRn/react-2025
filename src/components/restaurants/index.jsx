import { React, useState } from "react";
import { restaurants } from "../../../materials/datas.js";
import { RestaurantsTabs } from "./tabs";
import { Restaurant } from "./restaurant.jsx";



export const Restaurants = () => {
    const [activeTab, setActiveTab] = useState(0);    
    
    return (
        <div>
            <RestaurantsTabs
                restaurants={restaurants}
                activeTab={activeTab}
                onChangeTab={setActiveTab}
            />
            <Restaurant
                restaurant={restaurants[activeTab]}
            />        
        </div>
    );
};