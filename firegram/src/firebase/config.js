import * as firebase  from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'; 

 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyA1i7ZHqjsIN7ey_RND6f7Yv6TA4aZWfO4",
    authDomain: "abdigram-3ba02.firebaseapp.com",
    databaseURL: "https://abdigram-3ba02.firebaseio.com",
    projectId: "abdigram-3ba02",
    storageBucket: "abdigram-3ba02.appspot.com",
    messagingSenderId: "419092737872",
    appId: "1:419092737872:web:e79f064b70d2e030d80655"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirebase = firebase.firestore();

  export {projectFirebase, projectStorage};