import { createSlice } from "@reduxjs/toolkit";
import { AUTHOR_STATE_INIT, BD_COLLECTIONS } from "@/constants";
import { addDocumentInCollection, getAllDataByColName } from "@/store/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Author } from "@/models";

export const getAllEntries = createAsyncThunk<
  Author[],
  undefined,
  { rejectValue: string }
>("authorSlice/getAllEntries", async (_, { rejectWithValue }) => {
  const response = await getAllDataByColName(BD_COLLECTIONS.authors).then(
    (r) => {
      const remoteData = r.map((doc) => {
        const data = doc.data();
        return { id: doc.id, name: data.name };
      });

      return remoteData;
    }
  );

  if (!response) {
    return rejectWithValue(
      "Не удалось получить все записи. Что-то пошло не так..."
    );
  }

  return response;
});

type AddEntryType = {name: string};


export const addEntry = createAsyncThunk<Author, AddEntryType , { rejectValue: string }>('authorSlice/addEntry', async (data, {rejectWithValue}) => {
  const response = await addDocumentInCollection(BD_COLLECTIONS.authors, data);
  
  if(!response) {
    return rejectWithValue("Не удалось добавить запись. Что-то пошло не так...")
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
