import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyBhMMRRLHOd_HuOJB6Q0UJD6cmBJqzJuaM",
    authDomain: "ota-collab.firebaseapp.com",
    projectId: "ota-collab",
    storageBucket: "ota-collab.appspot.com",
    messagingSenderId: "605815702484",
    appId: "1:605815702484:web:439fce81604fbda5ed0c41",
    measurementId: "G-3T4R03KZT3"
};

const app = initializeApp(firebaseConfig);

export default (context, inject) => {
  inject('firebase', app)
}