import { React } from "react";
import { Provider } from "react-redux";

import { Layout } from "./layout.jsx";
import { ThemeContextProvider } from "./contexts/theme-context/provider.jsx";
import { AuthContextProvider } from "./contexts/auth-context/provider.jsx";
import { store } from "../redux/store";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./home-page/home-page.jsx";
import { RestaurantsPage } from "./restaurants-page/restaurants-page.jsx";
import { RestaurantPage } from "./restaurants-page/restaurant-page/restaurant-page.jsx";
import { RestaurantMenuPage } from "./restaurants-page/restaurant-page/menu-page/menu-page.jsx";
import { RestaurantReviewsPage } from "./restaurants-page/restaurant-page/reviews-page/reviews-page.jsx";
import { DishPage } from "./dish-page/dish-page.jsx";


export const App = () => {
    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <AuthContextProvider>
                    <Layout>
                    <BrowserRouter>
                        <Routes> 
                            <Route path="/" element={<HomePage />} />
                            <Route path="restaurants" element={<RestaurantsPage />}>
                                <Route path=":restaurantId" element={<RestaurantPage />}>
                                    <Route index element={<RestaurantMenuPage />} />
                                    <Route path="menu" element={<RestaurantMenuPage />} />
                                    <Route path="reviews" element={<RestaurantReviewsPage />} />
                                </Route>
                            </Route>
                            <Route path="/dish/:dishId" element={<DishPage />} />
                            <Route path="*" element={<div>404</div>} />
                        </Routes>
                    </BrowserRouter>
                    </Layout>
                </AuthContextProvider>
            </ThemeContextProvider>
        </Provider>
    );
}; 