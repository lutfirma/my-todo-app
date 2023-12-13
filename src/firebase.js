// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA51WpFFkhfZbnrPAZi03-wwZbjwtTUd5A",
  authDomain: "my-todo-app-95b37.firebaseapp.com",
  projectId: "my-todo-app-95b37",
  storageBucket: "my-todo-app-95b37.appspot.com",
  messagingSenderId: "537766275585",
  appId: "1:537766275585:web:08448f786e994330546e00",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
