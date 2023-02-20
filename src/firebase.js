// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXBUatbD0YTFMo9B-bottD1kJZDM_EAjc",
  authDomain: "olademar-b886f.firebaseapp.com",
  projectId: "olademar-b886f",
  storageBucket: "olademar-b886f.appspot.com",
  messagingSenderId: "791077670840",
  appId: "1:791077670840:web:196e8f85ac3e1d51a9c94d",
  measurementId: "G-4C58C6WEWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;