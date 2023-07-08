// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfXs9cP3cWuhOxUUEsBOUa2cyHZCXyP1E",
  authDomain: "listed-dashboard-55ff6.firebaseapp.com",
  projectId: "listed-dashboard-55ff6",
  storageBucket: "listed-dashboard-55ff6.appspot.com",
  messagingSenderId: "467776326973",
  appId: "1:467776326973:web:84f0e3b36b35a33ec64954",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
