import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUiedplQW2Oz4fQZyUpb11SCcL69vzRI0",
    authDomain: "typing-project-61902.firebaseapp.com",
    projectId: "typing-project-61902",
    storageBucket: "typing-project-61902.appspot.com",
    messagingSenderId: "38359792615",
    appId: "1:38359792615:web:c7469dbf38e800195e9b42"
};  

// Initialize Firebase
export const  app = initializeApp(firebaseConfig);
export const storage = getStorage(app)