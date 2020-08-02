import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDVZYhmlI_fsqqC2hkao2t-zzrK_kXdJ48",
    authDomain: "hack-plat-vue.firebaseapp.com",
    databaseURL: "https://hack-plat-vue.firebaseio.com",
    projectId: "hack-plat-vue",
    storageBucket: "hack-plat-vue.appspot.com",
    messagingSenderId: "956666214707",
    appId: "1:956666214707:web:ce915a76ab35279946e646",
    measurementId: "G-J737R09RXR"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth }