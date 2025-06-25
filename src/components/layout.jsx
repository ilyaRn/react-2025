import { React } from "react";

import { Header } from "./header/header.jsx";
import { ProgressBar } from "./progress-bar/progress-bar.jsx";
import { Footer } from "./footer/footer.jsx";
import { Cart } from "./cart/cart.jsx";
import { Outlet } from "react-router";

export const Layout = () => {
    return (
        <>
            <ProgressBar />
            <Cart />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
