import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyCRkJyxEZfz7pAXVliI4o-PoyFkb7cZ3rU",
    authDomain: "crwn-db-e36f3.firebaseapp.com",
    projectId: "crwn-db-e36f3",
    storageBucket: "crwn-db-e36f3.appspot.com",
    messagingSenderId: "177310811697",
    appId: "1:177310811697:web:479f90bc6e6ad80854b710"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;