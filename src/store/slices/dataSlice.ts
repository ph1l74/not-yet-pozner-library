import { createSlice } from "@reduxjs/toolkit";
import { DATA_INIT_STATE, DATA_STORE_TYPE } from "@/constants";
import { getAllBooks } from "../thunks";

const dataSlice = createSlice({
  name: "dataSlice",
  initialState: DATA_INIT_STATE,
  reducers: {
    setIsLoading(state: DATA_STORE_TYPE, action) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBooks.pending, (state) => {
        if (!state.isLoading) {
          state.isLoading = true;
        }
      })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        if (state.isLoading) {
          state.isLoading = false;
          state.data = action.payload;
        }
      })
      .addCase(getAllBooks.rejected, (state, action) => {
        if (state.isLoading) {
          state.isLoading = false;
          state.data = null;
          throw new Error(action.error.message);
        }
      });
  },
});

export const dataSliceReducer = dataSlice.reducer;
export const { setIsLoading } = dataSlice.actions;
