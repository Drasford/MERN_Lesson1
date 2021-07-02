import { createSelector } from "reselect";
import { values } from "ramda";

export const getAllPostsSelector = createSelector(
  (state) => state.postsState.posts,
  values
);

export const getIdToUpdateSelector = createSelector(
  (state) => state.postsState.idToUpdate,
  values
);

