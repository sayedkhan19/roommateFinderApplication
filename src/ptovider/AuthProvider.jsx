import React, { createContext, useEffect, useState} from 'react';
import app from '../fireBase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true)
   // console.log(user)

    const creatUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=> {
    const unsubscribe =    onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[]);

    const logOut = ()=>{
        return signOut(auth)
    };
const updateUser = (updatedData) =>{
        return updateProfile(auth.currentUser, updatedData).then(() => {
            // Refresh local user state
            setUser({ ...auth.currentUser });
          });

    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const authData = {
        user,
        setUser,
        creatUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUser,
        
    }
    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
};

export default AuthProvider;