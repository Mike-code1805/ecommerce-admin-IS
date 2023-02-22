import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA4_gYNXPPcLsyAkwVcDnw9Jz6NaNvigTc",
  authDomain: "ecommerce-admin-is.firebaseapp.com",
  projectId: "ecommerce-admin-is",
  storageBucket: "ecommerce-admin-is.appspot.com",
  messagingSenderId: "589587775902",
  appId: "1:589587775902:web:c27357f387bb703090168f",
  measurementId: "G-6KV3BJSNLC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
