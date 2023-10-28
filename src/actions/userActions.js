// src/components/actions/userActions.js

import axios from "axios"; // Import Axios or your preferred HTTP client
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from "./types";

// Fetch user data
export const fetchUser = () => (dispatch, getState) => {
  // Request headers
  const config = {
    headers: {
      Authorization: `Bearer ${getState().auth.token}`,
    },
  };

  dispatch({ type: FETCH_USER_REQUEST });

  axios
    .get("/api/user", config)
    .then((res) => {
      dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_USER_FAILURE, payload: err.response.data });
    });
};

// Update user data
export const updateUser = (userData) => (dispatch, getState) => {
  // Request headers
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getState().auth.token}`,
    },
  };

  dispatch({ type: UPDATE_USER_REQUEST });

  axios
    .put("/api/user", userData, config)
    .then((res) => {
      dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: UPDATE_USER_FAILURE, payload: err.response.data });
    });
};
