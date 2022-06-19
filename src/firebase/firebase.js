import firebase from "firebase/app";
import "firebase/firestore"; // import specific library so that avoid downloading redundant libraries.

const firebaseConfig = {
  apiKey: "AIzaSyDzZopymZAm05oRuxNc2Jyg84MiPRHmooM",
  authDomain: "vue-blog-88b59.firebaseapp.com",
  databaseURL: "https://vue-blog-88b59-default-rtdb.firebaseio.com",
  projectId: "vue-blog-88b59",
  storageBucket: "vue-blog-88b59.appspot.com",
  messagingSenderId: "409842529372",
  appId: "1:409842529372:web:858cbdd89f2bf2adda6299",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
