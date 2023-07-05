import React,{ createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext= createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const providerGit = new GithubAuthProvider();

const UserContext = ({children}) => {
    const [user,setUser]=useState(null);
    const[loader,setLoader]=useState(true);
    const [verify,setVerify]=useState([]);
    const signUp=(email,password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn=(email,password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logInWithGoogle=()=>{
        setLoader(true);
        return signInWithPopup(auth, provider)
    }
    const logInWithGitHub=()=>{
        setLoader(true);
        return signInWithPopup(auth, providerGit)
    }
    const logOut=()=>{
        setLoader(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser);
            setLoader(false);
        })
        return ()=>unSubscribe();
    },[])
    useEffect(() => {
        fetch('https://car-swap-server.vercel.app/users/seller')
            .then(res => res.json())
            .then(data => setVerify(data))
    }, [])
    const authInfo={verify,user,signUp,logIn,logInWithGoogle,logInWithGitHub,logOut,loader,setLoader}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;