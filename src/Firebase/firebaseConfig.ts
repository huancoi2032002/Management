// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDH5E7qLxY-a5-q2lqH6dQMoGsDO-cakYY",
    authDomain: "queuemanagement-bf074.firebaseapp.com",
    projectId: "queuemanagement-bf074",
    storageBucket: "queuemanagement-bf074.appspot.com",
    messagingSenderId: "891168730066",
    appId: "1:891168730066:web:6a299d45bb749bda2c760b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);