import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./actionTypes"

export const loginRequestAction = () => {
  return { type: USER_LOGIN_REQUEST }
}
export const loginSuccsesAction = (payload) => {
  return { type: USER_LOGIN_SUCCESS, payload }
}
export const loginFalureAction = () => {
  return { type: USER_LOGIN_FAILURE }
}
