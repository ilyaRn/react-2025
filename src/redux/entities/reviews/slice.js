import { createSlice } from "@reduxjs/toolkit";
import { reviews } from "../../../../materials/normalized-datas";

const initialState = {
  ids: reviews.map(({ id }) => id),
  entities: reviews.reduce((acc, review) => {
    acc[review.id] = review;
    return acc;
  }, {}),
};

export const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState,
  selectors: {
    selectReviewIds: (state) => state.ids,
    selectReviewById: (state, id) => state.entities[id] || {},
  },
});

export const { selectReviewIds, selectReviewById, selectReviewsByIds } =  reviewSlice.selectors;