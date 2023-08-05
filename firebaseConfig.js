import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCdCEXDtaG_ruG7rC9n5WVzg0Phywnp_9c",
  authDomain: "wheelwell-cb4de.firebaseapp.com",
  projectId: "wheelwell-cb4de",
  storageBucket: "wheelwell-cb4de.appspot.com",
  messagingSenderId: "120989154090",
  appId: "1:120989154090:web:95ff157cf445a8c2ff3c53",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(config);
} else {
  app = firebase.app();
}

export default config;
