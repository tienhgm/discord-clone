import { initializeApp} from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCpE8yGsp1ZxJl7d9mySPi8JF5jmzUa6t4',
  authDomain: 'discord2-5e8a9.firebaseapp.com',
  projectId: 'discord2-5e8a9',
  storageBucket: 'discord2-5e8a9.appspot.com',
  messagingSenderId: '117579321648',
  appId: '1:117579321648:web:3aa5dec40e90add57d78f5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, db };
