import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB9QQZ_P9k8nz6l_6B-I0xteVeT9H8PdQY",
    authDomain: "anon-vent-3a7b4.firebaseapp.com",
    projectId: "anon-vent-3a7b4",
    storageBucket: "anon-vent-3a7b4.appspot.com",
    messagingSenderId: "303352340430",
    appId: "1:303352340430:web:cb851c1ec222c662cbd59f"
};

firebase.initializeApp(firebaseConfig)

export default firebase;