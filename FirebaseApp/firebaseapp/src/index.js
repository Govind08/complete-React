// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection,getDoc} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAxoMSnEc9uwJobofndegX1n0xXZYWlus4",
  authDomain: "myapp3-6df00.firebaseapp.com",
  databaseURL: "https://myapp3-6df00.firebaseio.com",
  projectId: "myapp3-6df00",
  storageBucket: "myapp3-6df00.appspot.com",
  messagingSenderId: "666695688115",
  appId: "1:666695688115:web:f1495996f84dea9634b5c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db,"Movies")

getDoc(colRef).then(data =>{
    console.log(data)
})