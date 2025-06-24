import { React } from "react";
import { Link } from "react-router";


export const HomePage = () => {
    return (
        <center>
            <h1>Home page</h1>
            <Link to="restaurants">restaurants</Link>
        </center>
    );
};