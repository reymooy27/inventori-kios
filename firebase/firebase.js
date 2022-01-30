import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyChkoszeArruDn1vuXfVVK8s3tYZ4e7RQQ",
  authDomain: "inventorikios.firebaseapp.com",
  projectId: "inventorikios",
  storageBucket: "inventorikios.appspot.com",
  messagingSenderId: "82366966679",
  appId: "1:82366966679:web:376cedb78412cc219772d2"
};

// Initialize Firebaseimport 
const app = initializeApp(firebaseConfig);
export default db = getFirestore(app);