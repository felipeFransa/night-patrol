import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB4AV7EhqXHZhNL_TSdyQhXdzCw8fgooOo",
  authDomain: "night-patrol-ea13b.firebaseapp.com",
  projectId: "night-patrol-ea13b",
  storageBucket: "night-patrol-ea13b.appspot.com",
  messagingSenderId: "298177451120",
  appId: "1:298177451120:web:32cc19b633d5589184d0b5",
  measurementId: "G-6YR49HDFY1"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);