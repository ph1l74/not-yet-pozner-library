import { createSlice } from "@reduxjs/toolkit";
import { DATA_INIT_STATE, DATA_STORE_TYPE } from "@/constants";

const dataSlice = createSlice({
  name: "dataSlice",
  initialState: DATA_INIT_STATE,
  reducers: {
    setIsLoading(data: DATA_STORE_TYPE, action) {
      data.isLoading = action.payload;
    },
  },
});

export const dataSliceReducer = dataSlice.reducer;
export const { setIsLoading } = dataSlice.actions;
