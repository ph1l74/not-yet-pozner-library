import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { BD_COLLECTIONS, DATA_STORE_TYPE } from "@/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getAllDataByColName = async (collectionName: string) => {
  const userCollection = collection(db, collectionName);
  const data = await getDocs(userCollection);
  return data.docs;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getDataByDocName = async (collectionName: string, docName: string) => {
  const docRef = doc(db, collectionName, docName);
  const data = await getDoc(docRef);
  return data;
};

export const getAllBooks = createAsyncThunk<
  unknown,
  void,
  {
    state: {
      store: DATA_STORE_TYPE;
    };
  }
>('dataSlice/getAllBooks', async (_, { getState }) => {
  const { store } = getState();
  if (store.isLoading) {
    const response = await getAllDataByColName(BD_COLLECTIONS.books).then((r) => {
        const data = r.map((doc) => ({[doc.id]: doc.data()}))
        return data;
    });
    return response;
  }
  return;
});