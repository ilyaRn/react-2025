import { React, useState } from "react";

const css = {
    value: {
        padding: "0 1rem",
    },
};

export const Counter = () => {
    const [value, setValue] = useState(0);    
    
    return (
        <div>
            <button onClick={() => setValue(value - 1)}>-</button>
            <span style={css.value}>{value}</span>
            <button onClick={() => setValue(value + 1)}>+</button>        
        </div>
    );
};