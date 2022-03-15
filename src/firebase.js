import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAm4jn6OMgk1MMXVZJ3GPOnAcUXfnia6hA",
    authDomain: "sportify-8829a.firebaseapp.com",
    databaseURL: "https://sportify-8829a-default-rtdb.firebaseio.com",
    projectId: "sportify-8829a",
    storageBucket: "sportify-8829a.appspot.com",
    messagingSenderId: "2056096191",
    appId: "1:2056096191:web:6203b2c32016558590790a",
    measurementId: "G-DF5NBM9NRK"
});


export const auth = app.auth();
export default app