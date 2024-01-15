import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import axios from "axios";


export const AuthContext = createContext(null);
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //User create with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Sign in user with email and password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google Login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    //logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser);
            console.log('User Current State', currentUser);
            setLoading(false);
            //trying JWT tokan
            if (currentUser) {
                axios.post('https://sharebite-server.onrender.com/token', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response ', res.data);
                    })
            }
            else {
                axios.post('https://sharebite-server.onrender.com/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log('user logged out',res.data);
                    })
            }
        });
        return () => {
            unSubscribe();
        }

    }, [])

    const authDetails = {
        user,
        loading,
        googleLogin,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authDetails}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;