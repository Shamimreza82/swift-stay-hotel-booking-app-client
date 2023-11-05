
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState} from 'react';
import auth from '../firebase.Config/firebase.Config';
import useAxios from '../Hooks/useAxiosRoute';




export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const axios = useAxios()


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
            const userEmail = currentUser?.email || user?.email
            console.log(userEmail);

            setuser(currentUser)
            console.log("user login in", currentUser);
            setIslodeing(false)
            if(currentUser){
                axios.post('/auth/access-token', {email: userEmail}, {withCredentials: true})
                .then(res => {
                    console.log(res.data);
                })
            } else {
                axios.post('/logout', {email: userEmail}, {withCredentials: true} )
                .then(res => {
                    console.log(res.data);
                })
            }

            

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