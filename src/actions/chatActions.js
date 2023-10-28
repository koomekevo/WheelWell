// src/components/actions/chatActions.js

import axios from "axios"; // Import Axios or your preferred HTTP client
import {
  FETCH_CHATS_REQUEST,
  FETCH_CHATS_SUCCESS,
  FETCH_CHATS_FAILURE,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
} from "./types";

// Fetch user chats
export const fetchChats = () => (dispatch, getState) => {
  // Request headers
  const config = {
    headers: {
      Authorization: `Bearer ${getState().auth.token}`,
    },
  };

  dispatch({ type: FETCH_CHATS_REQUEST });

  axios
    .get("/api/chats", config)
    .then((res) => {
      dispatch({ type: FETCH_CHATS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_CHATS_FAILURE, payload: err.response.data });
    });
};

// Send a message
export const sendMessage = (chatId, message) => (dispatch, getState) => {
  // Request headers
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getState().auth.token}`,
    },
  };

  const body = JSON.stringify({ message });

  dispatch({ type: SEND_MESSAGE_REQUEST });

  axios
    .post(`/api/chats/${chatId}/send`, body, config)
    .then((res) => {
      dispatch({ type: SEND_MESSAGE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: SEND_MESSAGE_FAILURE, payload: err.response.data });
    });
};
