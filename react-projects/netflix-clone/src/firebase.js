import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDT-PbdyqYA6bro24IbI7y_319ZV50nDoM",
    authDomain: "netflix-clone-e463a.firebaseapp.com",
    projectId: "netflix-clone-e463a",
    storageBucket: "netflix-clone-e463a.appspot.com",
    messagingSenderId: "926587458646",
    appId: "1:926587458646:web:0a9e078972e6900f8d17f7"
  };



  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

export { auth };
export default db;





//    firebase.initializeApp(firebaseConfig);

// // firebase.initializeApp(firebaseConfig);

// // // Export Firebase services
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
// export const firebaseApp = firebase;

// // If needed, you can add additional Firebase services here
// // For example: export const storage = firebase.storage();

// export default firebase;