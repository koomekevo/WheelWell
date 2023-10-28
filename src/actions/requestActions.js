// src/components/actions/requestActions.js

import axios from "axios"; // Import Axios or your preferred HTTP client
import {
  FETCH_REQUESTS_REQUEST,
  FETCH_REQUESTS_SUCCESS,
  FETCH_REQUESTS_FAILURE,
  SEND_REQUEST_REQUEST,
  SEND_REQUEST_SUCCESS,
  SEND_REQUEST_FAILURE,
} from "./types";

// Fetch user requests
export const fetchRequests = () => (dispatch, getState) => {
  // Request headers
  const config = {
    headers: {
      Authorization: `Bearer ${getState().auth.token}`,
    },
  };

  dispatch({ type: FETCH_REQUESTS_REQUEST });

  axios
    .get("/api/requests", config)
    .then((res) => {
      dispatch({ type: FETCH_REQUESTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_REQUESTS_FAILURE, payload: err.response.data });
    });
};

// Send a request
export const sendRequest = (mechanicId, message) => (dispatch, getState) => {
  // Request headers
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getState().auth.token}`,
    },
  };

  const body = JSON.stringify({ mechanicId, message });

  dispatch({ type: SEND_REQUEST_REQUEST });

  axios
    .post(`/api/requests/send`, body, config)
    .then((res) => {
      dispatch({ type: SEND_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: SEND_REQUEST_FAILURE, payload: err.response.data });
    });
};
