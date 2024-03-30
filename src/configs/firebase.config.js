import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDixFrFV6pybXqsAcqqqNu37BL4DgwDW-A",
  authDomain: "random-color-firebase.firebaseapp.com",
  projectId: "random-color-firebase",
  storageBucket: "random-color-firebase.appspot.com",
  messagingSenderId: "189345166156",
  appId: "1:189345166156:web:5a71276490e52d362695e9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
