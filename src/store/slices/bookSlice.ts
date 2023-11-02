import { createSlice } from "@reduxjs/toolkit";
import { BOOKS_STATE_INIT, BD_COLLECTIONS } from "@/constants";
import { addDocumentInCollection, getAllDataByColName } from "@/store/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Book } from "@/models";

export const getAllEntries = createAsyncThunk<
  Book[],
  undefined,
  { rejectValue: string }
>("bookSlice/getAllEntries", async (_, { rejectWithValue }) => {
  const response = await getAllDataByColName(BD_COLLECTIONS.books).then((r) => {
    const remoteData = r.map((doc) => {
      const data = doc.data();
      const { name, year, author } = data;
      return { id: doc.id, name, year, author };
    });
    return remoteData;
  });

  if (!response) {
    return rejectWithValue("Server Error!");
  }

  return response;
});

type AddEntryType = { name: string; year: number; author: string };

export const addEntry = createAsyncThunk<
  Book,
  AddEntryType,
  { rejectValue: string }
>("bookSlice/addEntry", async (data, { rejectWithValue }) => {
  const response = await addDocumentInCollection(
    BD_COLLECTIONS.books,
    data
  ).then((r) => r);
  if (!response) {
    return rejectWithValue(
      "Не удалось добавить запись. Что-то пошло не так..."
    );
  }
  return response;
});

const bookSlice = createSlice({
  name: "bookSlice",
  initialState: BOOKS_STATE_INIT,
  reducers: {},
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
