// src/components/actions/authActions.js

import axios from "axios"; // Import Axios or your preferred HTTP client
import {
  USER_LOADING,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./types";

export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then((res) => {
      dispatch({ type: USER_LOADED, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAIL });
    });
};

export const login = (username, password) => (dispatch) => {
  // Request headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request body
  const body = JSON.stringify({ username, password });

  axios
    .post("/api/auth/login", body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAIL });
    });
};

export const logout = () => (dispatch, getState) => {
  axios
    .post("/api/auth/logout/", null, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: LOGOUT_SUCCESS });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const register =
  ({ username, password, email }) =>
  (dispatch) => {
    // Request headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request body
    const body = JSON.stringify({ username, password, email });

    axios
      .post("/api/auth/register", body, config)
      .then((res) => {
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: REGISTER_FAIL });
      });
  };

// Setup config with token - Helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // If token, add to headers
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
};
