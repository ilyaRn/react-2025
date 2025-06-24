import { React } from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet, useParams } from "react-router";
import { selectDishById } from "../../redux/entities/dishes/slice";


export const DishPage = () => {
    const {dishId} = useParams();
    const dish = useSelector((state) => selectDishById(state, dishId));

    if (!dish) {
        return null;
    }

    return (
        <div>
            <center>
                <h3>{dish.name}</h3>
                <div>Price: {dish.price}</div>
                <ul>Ingredients:
                    {dish.ingredients.map((ingredient, i) => 
                        <li key={i}>{ingredient}</li>
                    )}
                </ul>
            </center>            
        </div>
    );
};