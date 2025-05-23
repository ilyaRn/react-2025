import {React} from "react";

const css = {
    height: "150px",
    border: "1px dashed #ccc",
    color: "#ccc",
};


export const Header = () => {
    return (
        <div style={css}>
            <center><h1>Header</h1></center>
        </div>
    );
};