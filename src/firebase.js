import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDnrCLLTa3QSt7PkDERNazyJYzyjXrj-Gk",
  authDomain: "baatcheet-chatapp.firebaseapp.com",
  projectId: "baatcheet-chatapp",
  storageBucket: "baatcheet-chatapp.appspot.com",
  messagingSenderId: "916984140242",
  appId: "1:916984140242:web:12def03425df991a9bb80b"
};


export const app = initializeApp(firebaseConfig);