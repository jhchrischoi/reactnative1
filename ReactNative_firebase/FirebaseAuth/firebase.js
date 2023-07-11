// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv65hCpR1OTXldHEUNHQbsXhdj0IxAIK4",
  authDomain: "fir-auth-f77d8.firebaseapp.com",
  projectId: "fir-auth-f77d8",
  storageBucket: "fir-auth-f77d8.appspot.com",
  messagingSenderId: "981979337198",
  appId: "1:981979337198:web:89d9b6d925eaed3029feff"
};

// Initialize Firebase
let app;
if(firebase.apps.length ===0) {
    app = firebase.initializeApp(firebaseConfig)
}else{
    app= firebase.app()
}

const auth = firebase.auth()

export {auth};