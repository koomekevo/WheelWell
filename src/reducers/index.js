// src/components/reducers/index.js

import { combineReducers } from "redux";
import authReducer from "./authReducer"; // Import your auth reducer
import chatReducer from "./chatReducer"; // Import your chat reducer
import userReducer from "./userReducer"; // Import your user reducer
import requestReducer from "./requestReducer"; // Import your request reducer

const rootReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
  user: userReducer,
  request: requestReducer,
  // Add other reducers as needed
});

export default rootReducer;
