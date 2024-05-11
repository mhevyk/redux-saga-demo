import counterReducer from "./counterReducer";
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";

export default combineReducers({
  counterReducer,
  userReducer,
});
