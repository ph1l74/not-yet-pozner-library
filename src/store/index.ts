import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { booksSliceReducer } from "./slices/bookSlice";
import { BOOKS_STATE_TYPE } from "@/constants";
import { authorSliceReducer } from "./slices/authorSlice";
import { interviewSliceReducer } from "./slices/interviewSlice";

const rootReducer = combineReducers({
  books: booksSliceReducer,
  authors: authorSliceReducer,
  interviews: interviewSliceReducer,
});

type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});

export type TypedDispatch = ThunkDispatch<
  { store: BOOKS_STATE_TYPE },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  AnyAction
>;

export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  BOOKS_STATE_TYPE,
  unknown,
  AnyAction
>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
