import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDtZOlel5y_7LRryepboqnJOQvKN0aSMyA",
  authDomain: "about-me-81448.firebaseapp.com",
  databaseURL: "https://about-me-81448-default-rtdb.firebaseio.com",
  projectId: "about-me-81448",
  storageBucket: "about-me-81448.appspot.com",
  messagingSenderId: "337333882091",
  appId: "1:337333882091:web:2856619891012b828182ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
