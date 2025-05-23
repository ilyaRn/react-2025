import { React, useState } from "react";

const css = {
    amount: {
        padding: "0 1rem",
    },
};

export const ProductCounter = () => {
    const [amount, setAmount] = useState(0);    
    
    return (
        <div>
            <button onClick={() => setAmount(amount - 1)}>-</button>
            <span style={css.amount}>{amount}</span>
            <button onClick={() => setAmount(amount + 1)}>+</button>        
        </div>
    );
};