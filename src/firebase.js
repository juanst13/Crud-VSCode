import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCFmXZbLJv0-R1iZNr_WHEf3Yn4kaxII0Q",
    authDomain: "crud-66f94.firebaseapp.com",
    projectId: "crud-66f94",
    storageBucket: "crud-66f94.appspot.com",
    messagingSenderId: "918918270850",
    appId: "1:918918270850:web:9ed75fd50b43fa637ec99b"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)