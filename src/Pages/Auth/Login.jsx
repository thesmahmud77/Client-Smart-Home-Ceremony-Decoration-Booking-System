import React, { use } from "react";
import MainContainer from "../../Container/MainContainer";
import Navbar from "../../Components/Navbar";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../Firebase/Context & Provider/AuthContext";

const Login = () => {
  const { GoogleSignIn, setUser } = use(AuthContext);

  // Google Sign In Funcation
  const handleGoogleSignIn = () => {
    GoogleSignIn()
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => console.log(error));
    // console.log("Google Signin Clicked");
  };
  return (
    <div className="bg-secondary min-h-screen min-w-screen">
      <Navbar></Navbar>
      <div className="flexCenter flex-col bg-white w-100 mx-auto mt-50 py-30 rounded-xl">
        <h1 className="heading1">Welcome Back</h1>
        <p className="mt-2">Please enter your details to sign in.</p>
        <div>
          <fieldset className="fieldset mt-10">
            <label className="label paragraph2">Email</label>
            <input type="email" className="input w-70" placeholder="Email" />
            <label className="label paragraph2">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn-primary mt-4">Login</button>
          </fieldset>
          <div className="divider">OR Continue with </div>
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white w-full text-black border-[#e5e5e5]"
          >
            <FcGoogle />
            Login with Google
          </button>
        </div>
        <p className="mt-2">
          If you are not registed please
          <span>
            <Link className="text-primary mx-2 font-bold" to={"/register"}>
              Register
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
