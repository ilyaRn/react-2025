import { React, useState } from "react";
import { ThemeContext } from ".";

export const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState("default");

    return <ThemeContext value={{ theme, setTheme }}>
        {props.children}
    </ThemeContext>;
};