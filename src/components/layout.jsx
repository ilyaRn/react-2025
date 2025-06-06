import { React } from "react";

import { Header} from "./header/header.jsx";
import { ProgressBar} from "./progress-bar/progress-bar.jsx";
import { Footer } from "./footer/footer.jsx";

export const Layout = ({ children }) => {
    return (
        <>
            <ProgressBar />
            <Header />
            {children}
            <Footer />
        </>
    );
};