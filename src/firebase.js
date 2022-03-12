import firebase from "firebase/compat/app"
import "firebase/compat/auth"

// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// });
// const app = firebase.initializeApp({
//     apiKey: 'AIzaSyD_QOk5uViHXBP4cJQYD-0BTzIBkak9gyA',
//     authDomain: 'globetrot-production.firebaseapp.com',
//     projectId: 'globetrot-production',
//     storageBucket: 'globetrot-production.appspot.com',
//     messagingSenderId: '558926732695',
//     appId: '1:558926732695:web:d0db942461d1720ab2f8d2'
// });

const app = firebase.initializeApp({
    apiKey: 'AIzaSyCd3E6g9Zvea4RhduuY9vGAT5bD6SZicrA',
    authDomain: 'globetrot-development.firebaseapp.com',
    projectId: 'globetrot-developmentn',
    storageBucket: 'globetrot-development.appspot.com',
    messagingSenderId: '952540944988',
    appId: '1:952540944988:web:f1854cac91fcc3827de499'
});


export const auth = app.auth();
export default app