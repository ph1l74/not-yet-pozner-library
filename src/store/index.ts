import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
// import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { dataSliceReducer } from "./slices/dataSlice";

const rootReducer = combineReducers({ data: dataSliceReducer });

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});

export default store;
