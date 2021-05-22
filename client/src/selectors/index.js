import { createSelector } from "reselect";
import { values } from "ramda";

export const getAllPostsSelector = createSelector(
  (state) => state.posts,
  values
);
