import { collection, getDocs, doc, getDoc, addDoc } from "firebase/firestore";
import { db } from "@/firebase";

export const getAllDataByColName = async (collectionName: string) => {
  const userCollection = collection(db, collectionName);
  const data = await getDocs(userCollection);
  return data.docs;
};

export const addDocumentInCollection = async (collectionName: string, data: unknown) => {
  const userCollection = collection(db,collectionName);
  const docRef = await addDoc(userCollection, data);
  return docRef.id;
}

export const getDataByDocName = async (collectionName: string, docName: string) => {
  const docRef = doc(db, collectionName, docName);
  const data = await getDoc(docRef);
  return data;
};
