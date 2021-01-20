import firebase from 'firebase'
import '@firebase/auth';
const firebaseConfig = {
    apiKey: "xxxxxxxxxxxxx",
    authDomain: "redux-59e6f.firebaseapp.com",
    databaseURL: "xxxxxxxxxx",
    projectId: "redux-59e6f",
    storageBucket: "redux-59e6f.appspot.com",
    messagingSenderId: "xxxxxxx",
     
}
export const Firebase = firebase.initializeApp(firebaseConfig)
export default Firebase