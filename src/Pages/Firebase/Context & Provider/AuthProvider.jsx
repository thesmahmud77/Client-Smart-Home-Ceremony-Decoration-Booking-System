import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
// import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { auth } from "../Firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log("From AuthProvider Page", user);
  const [loading, setLoading] = useState(true);

  const GooglepProvider = new GoogleAuthProvider();

  //   Google Signin
  const GoogleSignIn = () => {
    return signInWithPopup(auth, GooglepProvider);
  };

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    GoogleSignIn,
    register,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
