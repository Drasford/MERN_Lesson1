import {
  DELETE_POST,
  ID_TO_UPDATE,
  LOAD_POSTS,
  RESPONSE_UPDATE_POST,
  CLEAR_ID_TO_UPDATE,
  RESPONSE_CREATE_POST,
} from "../actions/types";
import { map } from "ramda";

const initialState = {
  posts: [],
  idToUpdate: 0,
};

const loadPosts = (state, posts) => ({
  ...state,
  posts,
});

const createPost = (state, { post }) => ({
  ...state,
  posts: [...state.posts, post],
});

const deletePost = (state, { postId }) => ({
  ...state,
  posts: state.posts.filter((post) => post._id !== postId),
});

const updatePost = (state, updatedPost) => ({
  ...state,
  posts: map(
    (post) => (post._id === updatedPost._id ? updatedPost : post),
    state.posts
  ),
});

const setIdToUpdate = (state, { id }) => ({
  ...state,
  idToUpdate: id,
});

export const postsState = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return loadPosts(state, action.payload);
    case RESPONSE_CREATE_POST:
      return createPost(state, action.payload);
    case DELETE_POST:
      return deletePost(state, action.payload);
    case RESPONSE_UPDATE_POST:
      return updatePost(state, action.payload);
    case ID_TO_UPDATE:
      return setIdToUpdate(state, action.payload);
    case CLEAR_ID_TO_UPDATE:
      return { ...state, idToUpdate: 0 };
    default:
      return state;
  }
};
