import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBzHecJz799XBGetYMtajLTdTfE-I6ffas",
  authDomain: "crush-a05de.firebaseapp.com",
  databaseURL: "https://crush-a05de-default-rtdb.firebaseio.com",
  projectId: "crush-a05de",
  storageBucket: "crush-a05de.firebasestorage.app",
  messagingSenderId: "184735195559",
  appId: "1:184735195559:web:eb544b568f8f8d5d669682",
  measurementId: "G-RJMTQZ863D"
};

const app = initializeApp(firebaseConfig);

// Initialize Analytics only if supported
export const analytics = (async () => {
  if (await isSupported()) {
    return getAnalytics(app);
  }
  return null;
})();

export const db = getFirestore(app);
export const auth = getAuth(app);