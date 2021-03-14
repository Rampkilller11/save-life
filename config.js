import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCuReMPMmAhHoK6jx4xwlMYG7OkY5V6K4Y",
  authDomain: "precious-life.firebaseapp.com",
  projectId: "precious-life",
  storageBucket: "precious-life.appspot.com",
  messagingSenderId: "184389639362",
  appId: "1:184389639362:web:2c4b87695633961c8c6f5b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();