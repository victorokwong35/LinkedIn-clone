import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAU5pGY8-J12NPlbvjf3QncVZDvhP8bnLw",
    authDomain: "linkedin-clone-3572e.firebaseapp.com",
    projectId: "linkedin-clone-3572e",
    storageBucket: "linkedin-clone-3572e.appspot.com",
    messagingSenderId: "107781620663",
    appId: "1:107781620663:web:d4bafcd92d943ee7871e32"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };