import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyC7yCgF4ZIFjfdly-ne9nycJ709hThzCkQ",
    authDomain: "auth-development-3180b.firebaseapp.com",
    projectId: "auth-development-3180b",
    storageBucket: "auth-development-3180b.appspot.com",
    messagingSenderId: "788856645069",
    appId: "1:788856645069:web:352589b868ef08ac831084"
})

export const auth = app.auth()
export default app