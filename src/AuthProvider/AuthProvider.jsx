
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState} from 'react';
import auth from '../firebase.Config/firebase.Config';


export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const [user, setuser] = useState(null)
    const [isLodeing, setIslodeing] = useState (true)

    const createUser = (email, password) => {
        setIslodeing(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setIslodeing(true)
        return signInWithEmailAndPassword (auth, email, password)
    }

    const logeOut = () => {
        return signOut(auth)
    }
    
    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser)
            console.log("user login in", currentUser);
            setIslodeing(false)
        })  
        return () => {
            unSubcribe()
        }
    },[])

    const authInfo = {
        createUser,
        loginUser,
        user, 
        logeOut, 
        isLodeing
     }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;