import { React } from "react";

import { Layout } from "./layout.jsx";
import { Restaurants } from "./restaurants/restaurants.jsx";

export const App = () => {
    return (         
        <Layout>
            <Restaurants />
        </Layout>          
    );
}; 