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


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date()

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;