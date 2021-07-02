import { AUTH, LOGOUT } from "../actions/types";

const initialState = {
  authData: null,
};

const setAuthData = (state, authData) => {
  localStorage.setItem("profile", JSON.stringify({ ...authData }));
  return {
    ...state,
    authData,
  };
};

const logOutUser = (state) => {
  localStorage.removeItem("profile");
  return { ...state, authData: null };
};

export const authState = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return setAuthData(state, action.payload);

    case LOGOUT:
      return logOutUser(state);

    default:
      return state;
  }
};
