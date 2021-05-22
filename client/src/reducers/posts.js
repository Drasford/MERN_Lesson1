import { CREATE, LOAD_ALL } from "../actions/types";

const createPost = (posts, { post }) => ([...posts, post]);


export const posts = (posts = [], action) => {
  switch (action.type) {
    case LOAD_ALL:
      return action.payload;
    case CREATE:
      return createPost(posts, action.payload);
    default:
      return posts;
  }
};
