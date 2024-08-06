// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyB0tPH0z25mR5ugJGgvB-AiEUCwLd2XcKo',
	authDomain: 'react-curso-461da.firebaseapp.com',
	projectId: 'react-curso-461da',
	storageBucket: 'react-curso-461da.appspot.com',
	messagingSenderId: '944418782479',
	appId: '1:944418782479:web:b470208e768a3becc0d27a',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
