import { createSlice } from "@reduxjs/toolkit";
import {
  BOOKS_STATE_INIT,
  BD_COLLECTIONS,
} from "@/constants";
import { getAllDataByColName } from "@/store/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Book } from "@/models";

export const getAllEntries = createAsyncThunk<
  Book[],
  undefined,
  { rejectValue: string }
>("bookSlice/getAllEntries", async (_, { rejectWithValue }) => {
  const response = await getAllDataByColName(BD_COLLECTIONS.books).then((r) => {
    const remoteData = r.map((doc) => ({ [doc.id]: doc.data() }));
    return remoteData;
  });

  if (!response) {
    return rejectWithValue("Server Error!");
  }

  return response;
});

const bookSlice = createSlice({
  name: "bookSlice",
  initialState: BOOKS_STATE_INIT,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllEntries.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllEntries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getAllEntries.rejected, (state, action) => {
        state.isLoading = false;
        state.books = [];
        throw new Error(action.error.message);
      });
  },
});

export const booksSliceReducer = bookSlice.reducer;