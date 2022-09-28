import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDds4IY2i05CAi-7__ODMEGsYD_pPcPmTg",
  authDomain: "videolibrary-26897.firebaseapp.com",
  projectId: "videolibrary-26897",
  storageBucket: "videolibrary-26897.appspot.com",
  messagingSenderId: "647730957977",
  appId: "1:647730957977:web:a5cf31fe42acacb288b208",
  measurementId: "G-0BWDDJM9PH",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
