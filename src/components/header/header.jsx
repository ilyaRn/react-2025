import { React, useContext } from "react";
import style from "./header.module.css";
import { ThemeContext } from "../contexts/theme-context";
import { Button } from "../button/button";
import { AuthContext } from "../contexts/auth-context";
import { useDispatch } from "react-redux";
import { truncateCart } from "../../redux/entities/cart/slice";

export const Header = () => {
    const { setTheme } = useContext(ThemeContext);
    const { auth, login, logout } = useContext(AuthContext);
    const dispatch = useDispatch();

    return (
        <div className={style.header}>
            <center>
                <h1>Header</h1>
            </center>
            <Button
                title="Change theme"
                onClick={() => {
                    setTheme((current) =>
                        current == "default" ? "dark" : "default"
                    );
                }}
            />
            {auth.username ? (
                <>
                    <span>{auth.username}</span>
                    <Button
                        title="logout"
                        onClick={() => {
                            logout();
                            dispatch(truncateCart());
                        }}
                    />
                </>
            ) : (
                <>
                    <Button title="login" onClick={login} />
                </>
            )}
        </div>
    );
};
