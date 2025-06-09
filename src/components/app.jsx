import { React } from "react";
import { Provider } from "react-redux";

import { Layout } from "./layout.jsx";
import { Restaurants } from "./restaurants/restaurants.jsx";
import { ThemeContextProvider } from "./contexts/theme-context/provider.jsx";
import { AuthContextProvider } from "./contexts/auth-context/provider.jsx";
import { store } from "../redux/store";

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <AuthContextProvider>
                    <Layout>
                        <Restaurants />
                    </Layout>
                </AuthContextProvider>
            </ThemeContextProvider>
        </Provider>
    );
}; 