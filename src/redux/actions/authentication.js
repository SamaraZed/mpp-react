import instance from "./instance";

import decode from "jwt-decode";
import { SET_CURRENT_USER } from "./actionTypes";

export const checkForExpiredToken = () => async (dispatch) => {
  const currentTimeInSeconds = Date.now() / 1000;
  const token = await localStorage.getItem("token");

  if (token && decode(token).exp >= currentTimeInSeconds)
    return dispatch(setCurrentUser(token));
  else return setAuthToken();
};

const setAuthToken = (token) => {
  if (token) {
    localStorage.setItems("token", token);
    instance.defaults.headers.Authorization = `jwt ${token}`;
  } else {
    localStorage.removeItem("token");
    delete instance.defaults.headers.Authorization;
  }
};

const setCurrentUser = (token) => {
  return {
    type: SET_CURRENT_USER,
    payload: token ? decode(token) : null,
  };
};

export const login = (userData, history) => async (dispatch) => {
  try {
    const response = await instance.post(`login/`, userData);
    const { token } = response.data;
    dispatch(setCurrentUser(token));
    history.push("/items");
  } catch (error) {
    console.error("ERROR while logging in", error);
  }
};

export const signup = (userData, history) => async (dispatch) => {
  try {
    await instance.post(`register/`, userData);
    dispatch(login(userData));
    history.push("/items");
  } catch (error) {
    console.error("ERROR while signing up", error);
  }
};

export const logout = () => setCurrentUser();
