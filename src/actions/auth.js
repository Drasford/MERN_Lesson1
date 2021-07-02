import { AUTH, LOGOUT} from "./types";


export const authAction = (result, token) => ({
  type: AUTH,
  payload: { result, token },
});

export const logOutAction = () => ({
    type: LOGOUT,
})