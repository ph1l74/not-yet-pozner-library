import { createSlice } from "@reduxjs/toolkit";
import { AUTHOR_STATE_INIT, BD_COLLECTIONS } from "@/constants";
import { getAllDataByColName } from "@/store/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Author } from "@/models";

const getAllEntries = createAsyncThunk<
  Author[],
  undefined,
  { rejectValue: string }
>("authorSlice/getAllEntries", async (_, { rejectWithValue }) => {
  const response = await getAllDataByColName(BD_COLLECTIONS.authors).then((r) => {
    const remoteData = r.map((doc) => ({ [doc.id]: doc.data() }));
    return remoteData;
  });

  if (!response) {
    return rejectWithValue("Server Error!");
  }

  return response;
});

const authorSlice = createSlice({
  name: "authorSlice",
  initialState: AUTHOR_STATE_INIT,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllEntries.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllEntries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authors = action.payload;
      })
      .addCase(getAllEntries.rejected, (state, action) => {
        state.isLoading = false;
        state.authors = [];
        throw new Error(action.error.message);
      });
  },
});

export const authorSliceReducer = authorSlice.reducer;
