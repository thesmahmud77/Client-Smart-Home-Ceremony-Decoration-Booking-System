import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
// import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { auth } from "../Firebase.init";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log("From AuthProvider Page", user);
  const [loading, setLoading] = useState(true);

  const GooglepProvider = new GoogleAuthProvider();

  //   Google Signin
  const GoogleSignIn = () => {
    return signInWithPopup(auth, GooglepProvider);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    GoogleSignIn,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
