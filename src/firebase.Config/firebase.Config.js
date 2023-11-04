
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYmsviQzfAXvYBl3bTjU4GeP7gQKdSOFk",
  authDomain: "swiftstay-931f1.firebaseapp.com",
  projectId: "swiftstay-931f1",
  storageBucket: "swiftstay-931f1.appspot.com",
  messagingSenderId: "1081123995647",
  appId: "1:1081123995647:web:e723fb367e9df03197b1ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app); 
 export default auth; 