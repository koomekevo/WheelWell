// src/components/reducers/chatReducer.js

import {
  FETCH_CHATS_REQUEST,
  FETCH_CHATS_SUCCESS,
  FETCH_CHATS_FAILURE,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
} from "../actions/types";

const initialState = {
  chats: [],
  loading: false,
  error: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHATS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CHATS_SUCCESS:
      return {
        ...state,
        chats: action.payload,
        loading: false,
      };
    case FETCH_CHATS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SEND_MESSAGE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        // You can update the chat state with the new message here
        // Example: chats: [...state.chats, action.payload]
      };
    case SEND_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default chatReducer;
