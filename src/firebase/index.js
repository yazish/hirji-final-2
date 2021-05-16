import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDgEgX4az9XGPPHp13xha3YJoVdLQslO6c",
    authDomain: "hirji-final-2-3699e.firebaseapp.com",
    databaseURL: "https://hirji-final-2-3699e-default-rtdb.firebaseio.com",
    projectId: "hirji-final-2-3699e",
    storageBucket: "hirji-final-2-3699e.appspot.com",
    messagingSenderId: "197636579087",
    appId: "1:197636579087:web:8e34c91a8cf1c8911ba87a",
    measurementId: "G-FQETZ6KT2D"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

export  {
    storage, firebase as default
  }