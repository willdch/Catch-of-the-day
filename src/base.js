import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCtdsvF3vB95vx46dqnSMnwkGN-bmlwvV8",
    authDomain: "catch-of-the-day-will-h.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-will-h.firebaseio.com"
  });

  const base = Rebase.createClass(firebaseApp.database());

  //this is a named import
  export { firebaseApp };

  //this is a default export
  export default base;