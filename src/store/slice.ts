import { createSlice } from "@reduxjs/toolkit";
import { STATE_TYPE, INIT_STATE } from "../constants";

const slice = createSlice({
  name: "dataSlice",
  initialState: INIT_STATE,
  reducers: {
    setIsLoading(state: STATE_TYPE, action) {
      state.isLoading = action.payload;
    },
  },
});

export default slice.reducer;
export const { setIsLoading } = slice.actions;
