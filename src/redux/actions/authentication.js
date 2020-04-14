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
    localStorage.setItem("token", token);
    instance.defaults.headers.Authorization = `jwt ${token}`;
  } else {
    localStorage.removeItem("token");
    delete instance.defaults.headers.Authorization;
  }
};

const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};

export const login = (userData, history) => async (dispatch) => {
  try {
    const response = await instance.post(`login/`, userData);
    console.log(response);
    // const data = response.config.data;
    const { access } = response.data;
    setAuthToken(access);
    const user = decode(access);
    dispatch(setCurrentUser(user));
    history.push("/clotheslist");
  } catch (error) {
    console.error("ERROR while logging in", error);
  }
};

export const signup = (userData, history) => async (dispatch) => {
  try {
    await instance.post(`register/`, userData);
    dispatch(login(userData));

    history.push("/clotheslist");
  } catch (error) {
    console.error("ERROR while signing up", error);
  }
};

export const logout = () => setCurrentUser(null);
