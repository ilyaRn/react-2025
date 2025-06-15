import { createSlice } from "@reduxjs/toolkit";
import { restaurants } from "../../../../materials/normalized-datas";

const initialState = {
  ids: restaurants.map(({ id }) => id),
  entities: restaurants.reduce((acc, restautant) => {
    acc[restautant.id] = restautant;
    return acc;
  }, {}),
};

export const restaurantSlice = createSlice({
  name: "restaurantSlice",
  initialState,
  selectors: {
    selectRestautantIds: (state) => state.ids,
    selectRestautantById: (state, id) => state.entities[id] || {},
  },
});

export const { selectRestautantIds, selectRestautantById } =  restaurantSlice.selectors;