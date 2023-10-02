import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { dataSliceReducer } from "./slices/dataSlice";
import { DATA_STORE_TYPE } from "@/constants";

const rootReducer = combineReducers({ data: dataSliceReducer });

type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});

export type TypedDispatch = ThunkDispatch<
  { store: DATA_STORE_TYPE },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  AnyAction
>;

export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  DATA_STORE_TYPE,
  unknown,
  AnyAction
>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
