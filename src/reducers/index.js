import { combineReducers } from "redux";
import { postsState } from "./posts";
import { authState } from "./auth";

export default combineReducers({
  authState,
  postsState,
});
