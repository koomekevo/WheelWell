// src/components/reducers/requestReducer.js

import {
  FETCH_REQUESTS_REQUEST,
  FETCH_REQUESTS_SUCCESS,
  FETCH_REQUESTS_FAILURE,
  SEND_REQUEST_REQUEST,
  SEND_REQUEST_SUCCESS,
  SEND_REQUEST_FAILURE,
} from "../actions/types";

const initialState = {
  requests: [],
  loading: false,
  error: null,
};

const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUESTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_REQUESTS_SUCCESS:
      return {
        ...state,
        requests: action.payload,
        loading: false,
      };
    case FETCH_REQUESTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SEND_REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEND_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        // You can update the request state with the new request here
        // Example: requests: [...state.requests, action.payload]
      };
    case SEND_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default requestReducer;
