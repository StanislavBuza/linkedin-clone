import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCMvWMSvOuzz0dr235OGJ8PYduPBADtx-w",
    authDomain: "linkedin-clone-22785.firebaseapp.com",
    projectId: "linkedin-clone-22785",
    storageBucket: "linkedin-clone-22785.appspot.com",
    messagingSenderId: "947778900997",
    appId: "1:947778900997:web:33ff6ed6c3f02f53e9786c",
    measurementId: "G-NZR3HEK56R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth};