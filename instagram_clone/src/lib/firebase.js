import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import seed file
// import { seedDatabase } from '../seed';
// firebase 페이지에서 API 받아오기
const config = {
    apiKey: "AIzaSyA2ZIHvwin_m8TuXGb7C_VyPhFW9Z71dUE",
    authDomain: "instagram-clone-23883.firebaseapp.com",
    projectId: "instagram-clone-23883",
    storageBucket: "instagram-clone-23883.appspot.com",
    messagingSenderId: "838223577353",
    appId: "1:838223577353:web:34b34c2ac6f21e224c93d8"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// call the seed file
// seedDatabase(firebase);
// 위의 import { seedDatabase } from '../seed'
// seedDatabase 는 한번만 사용하면 된다 firebase db에 seed해주고 역할 끝이므로
export { firebase, FieldValue };