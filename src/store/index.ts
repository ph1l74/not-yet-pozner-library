import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
// import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import reducer from "./slice";

const rootReducer = combineReducers({ store: reducer });

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});

export default store;
