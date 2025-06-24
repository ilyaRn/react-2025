import { createSlice, createSelector } from "@reduxjs/toolkit";
import { dishSlice } from "../dishes/slice";

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {},
    reducers: {
        "addToCart": (state, { payload }) => {
            state[payload] = (state[payload] || 0) + 1;
        },
        "removeFromCart": (state, { payload }) => {
            if (!state[payload]) {
                return;
            }
            state[payload] -= 1;
            if (state[payload] == 0) {
                delete state[payload];
            }
        },
        "truncateCart": () => {
            return {};
        },
    },
    selectors: {        
        selectCartItemAmount: (state, id) => {
            return state[id] || 0;
        }
    }
});

const selectCartSlice = (state) => state[cartSlice.name];
const selectDishSlice = (state) => state[dishSlice.name];

export const selectCartItems = createSelector([selectCartSlice, selectDishSlice], (cartSlice, dishSlice) => {
    return Object.keys(cartSlice).reduce((acc, dishId) => {
        const dish = dishSlice.entities[dishId];
        acc.push({id: dishId, amount: cartSlice[dishId], dishName: dish.name});
        return acc;
    }, []);
});

export const {addToCart, removeFromCart, truncateCart} = cartSlice.actions;
export const {selectCartItemAmount} = cartSlice.selectors;