import { FETCH_ALL, CREATE, DELETE_POST, REQUEST_UPDATE_POST, ID_TO_UPDATE, LOAD_POSTS, CLEAR_ID_TO_UPDATE, RESPONSE_UPDATE_POST, LIKE_POST } from "./types";

export const loadPosts = (posts) => ({
  type: LOAD_POSTS,
  payload: posts,
})
export const getPosts = () => ({
  type: FETCH_ALL,
});

export const createPost = (post) => ({
  type: CREATE,
  payload: { post },
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  payload: { postId }
})



export const requestUpdatePost = (postId, updatedPost) => ({
  type: REQUEST_UPDATE_POST,
  payload: { postId, updatedPost }
})

export const responseUpdatePost = updatedPost => ({
  type: RESPONSE_UPDATE_POST,
  payload: updatedPost,
})



export const idToUpdate = (id) => ({
  type: ID_TO_UPDATE,
  payload: {id}
})

export const clearIdToUpdate = () => ({
  type: CLEAR_ID_TO_UPDATE,
})

export const likePost = (postId) => ({
  type: LIKE_POST,
  payload: postId
})