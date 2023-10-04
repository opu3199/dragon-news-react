/* eslint-disable react/prop-types */
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firbase";

export const  AuthContext = createContext(null)
const Authprovider = ({children}) => {

    const [user,setuser]=useState(null)
    const [loading,setloading]=useState(true)

    const creteRegsiter=(email,password)=>{
        setloading(true)
         return createUserWithEmailAndPassword(auth, email, password)
    }

    const signincreate=(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout=()=>{
        setloading(true)
        return signOut(auth)
    }

    useEffect(()=>{
       return onAuthStateChanged(auth, (user) => {
             setuser(user)
             setloading(false)
            
          });
        
    },[]) 


    

const authinfo={
    creteRegsiter,
    loading,
    signincreate,
    user,
    logout

}

    return (
       <AuthContext.Provider value={authinfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default Authprovider;