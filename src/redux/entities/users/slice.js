import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../../../materials/normalized-datas";

const initialState = {
    ids: users.map(({ id }) => id),
    entities: users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {}),
};

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    selectors: {
        selectUserIds: (state) => state.ids,
        selectUserById: (state, id) => state.entities[id] || {},
    },
});

export const { selectUserIds, selectUserById, selectUsersByIds } =
    userSlice.selectors;
