import { React } from "react";

import { Layout } from "./layout.jsx";
import { Restaurants } from "./restaurants/restaurants.jsx";
import { ThemeContextProvider } from "./contexts/theme-context/provider.jsx";
import { AuthContextProvider } from "./contexts/auth-context/provider.jsx";

export const App = () => {
    return (
        <ThemeContextProvider>
            <AuthContextProvider>
                <Layout>
                    <Restaurants />
                </Layout>
            </AuthContextProvider>
        </ThemeContextProvider>
    );
}; 