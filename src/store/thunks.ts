import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { BD_COLLECTIONS } from "@/constants";
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

export const getAllBooks = createAsyncThunk(
  "dataSlice/getAllBooks",
  async (_, { getState }) => {
    const { data } = getState();
    if (data.isLoading) {
      const response = await getAllDataByColName(BD_COLLECTIONS.books).then(
        (r) => {
          const remoteData = r.map((doc) => ({ [doc.id]: doc.data() }));
          return remoteData;
        }
      );
      return response;
    }
    return;
  }
);
