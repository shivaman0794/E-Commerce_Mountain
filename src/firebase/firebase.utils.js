import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCBYoLJBGuwqA1dWBmWcT_HPBeZpO5SZPI",
    authDomain: "mountain-db.firebaseapp.com",
    databaseURL: "https://mountain-db.firebaseio.com",
    projectId: "mountain-db",
    storageBucket: "mountain-db.appspot.com",
    messagingSenderId: "838712496291",
    appId: "1:838712496291:web:d7ce2ec386417696666f16",
    measurementId: "G-YV8F3GVKQK"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const SnapShot = await userRef.get();

    if(!SnapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error){
        console.log("errpr creating user", error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;