import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'


const config={
    apiKey: "AIzaSyDJ-D97crgsxL2tCC3Yf-Zhp4yKFpxFxxk",
    authDomain: "rdy-db.firebaseapp.com",
    projectId: "rdy-db",
    storageBucket: "rdy-db.appspot.com",
    messagingSenderId: "2719729769",
    appId: "1:2719729769:web:a4ed77f657aa889a09faf8",
    measurementId: "G-4ZTYRR2DRF"
  };
export const createUserProfileDocument=async (userAuth,additionalData)=>{
  if(!userAuth) return;
  const userRef =firestore.doc(`users/${userAuth.uid}`)
  const snapshot=await userRef.get();
  if(!snapshot.exists){
    const {displayName,email}=userAuth;
    const createdAt=new Date()

    try{
await userRef.set({
  displayName,email,createdAt,...additionalData
})
    }
    catch(error){
      console.log('error dwd',error.message)
    }
  }
  return userRef;
};
  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider =new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})

  export const signInWithGoogle=()=>{
auth.signInWithPopup(provider)
  }

  export default firebase;
