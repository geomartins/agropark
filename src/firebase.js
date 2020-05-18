import firebase from 'firebase'
import 'firebase/storage'
require("firebase/firestore")


  var firebaseConfig = {
    apiKey: "AIzaSyAY4hlakXstWYpjr3c4GulgcRJRpADb4gk",
    authDomain: "agropark-76f03.firebaseapp.com",
    databaseURL: "https://agropark-76f03.firebaseio.com",
    projectId: "agropark-76f03",
    storageBucket: "agropark-76f03.appspot.com",
    messagingSenderId: "568815498090",
    appId: "1:568815498090:web:1e3e74ea2bf8341e016b13",
    measurementId: "G-MJKCXFLHZF"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  firebase.analytics();

  export {
      fb,
      db
  }
