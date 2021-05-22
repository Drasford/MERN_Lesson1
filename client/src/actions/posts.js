import { FETCH_ALL, CREATE } from "./types";

export const getPosts = () => ({
  type: FETCH_ALL,
});

export const createPost = (post) => ({
  type: CREATE,
  payload: { post },
});
