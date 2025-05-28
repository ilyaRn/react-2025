import { React, useState } from "react";

const css = {
    value: {
        padding: "0 1rem",
    },
};

export const Counter = ({min, max}) => {
    const [value, setValue] = useState(0);    
    
    return (
        <div>
            <button 
                disabled={!Number.isInteger(min) || value <= min}
                onClick={() => setValue(value - 1)}>-</button>
            <span style={css.value}>{value}</span>
            <button 
                disabled={!Number.isInteger(max) || value >= max}
                onClick={() => setValue(value + 1)}>+</button>        
        </div>
    );
};