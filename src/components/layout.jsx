import { React } from "react";

import { Header} from "./header/header.jsx";
import { Footer } from "./footer/footer.jsx";

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}; 