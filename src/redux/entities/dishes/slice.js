import { createSlice } from "@reduxjs/toolkit";
import { dishes } from "../../../../materials/normalized-datas";

const initialState = {
  ids: dishes.map(({ id }) => id),
  entities: dishes.reduce((acc, dish) => {
    acc[dish.id] = dish;
    return acc;
  }, {}),
};

export const dishSlice = createSlice({
  name: "dishSlice",
  initialState,
  selectors: {
    selectDishIds: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id] || {},
  },
});

export const { selectDishIds, selectDishById, selectDishesByIds } =  dishSlice.selectors;