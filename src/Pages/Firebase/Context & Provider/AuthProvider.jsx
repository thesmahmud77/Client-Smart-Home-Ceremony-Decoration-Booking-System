import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
// import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { auth } from "../Firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log("From AuthProvider Page", user);
  const [loading, setLoading] = useState(true);

  const Provider = new GoogleAuthProvider();

  //   Google Signin
  const GoogleSignIn = () => {
    return signInWithPopup(auth, Provider);
  };

  // Register With Email & Password
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login With Email Password
  const loginWithEp = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Signout Login user
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      Unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    GoogleSignIn,
    registerUser,
    loginWithEp,
    logOut,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
