import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyC8ctQxCf4JnCqOAG-toLi03GjyUkRLyv4",
  authDomain: "e-riding.firebaseapp.com",
  projectId: "e-riding",
  storageBucket: "e-riding.appspot.com",
  messagingSenderId: "565335839257",
  appId: "1:565335839257:web:efa4ed3f17ada3b3025088"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
