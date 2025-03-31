import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCBQMbbVbOdn-AhW9XFwsn2LvSBviML5J4",
  authDomain: "trial-504d7.firebaseapp.com",
  databaseURL: "https://trial-504d7-default-rtdb.firebaseio.com",
  projectId: "trial-504d7",
  storageBucket: "trial-504d7.appspot.com",
  messagingSenderId: "253874310334",
  appId: "1:253874310334:web:bc38d27ee01df6831c22ef"
};

export const app = initializeApp(firebaseConfig);