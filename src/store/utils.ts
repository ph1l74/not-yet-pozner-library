import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";

export const getAllDataByColName = async (collectionName: string) => {
  const userCollection = collection(db, collectionName);
  const data = await getDocs(userCollection);
  return data.docs;
};

export const getDataByDocName = async (collectionName: string, docName: string) => {
  const docRef = doc(db, collectionName, docName);
  const data = await getDoc(docRef);
  return data;
};
