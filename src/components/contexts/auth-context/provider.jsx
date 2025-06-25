import { React, useCallback, useState } from "react";
import { AuthContext } from ".";

export const AuthContextProvider = (props) => {
    const [auth, setAuth] = useState({
        username: null,
    });

    const login = useCallback(() => {
        setAuth({ username: "Ilya" });
    }, []);

    const logout = useCallback(() => {
        setAuth({ username: null });
    }, []);

    return (
        <AuthContext value={{ auth, login, logout }}>
            {props.children}
        </AuthContext>
    );
};
