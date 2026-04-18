import React from "react";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router";

const Register = () => {
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
        </div>
        <p>
          If you are already registed please{" "}
          <span>
            <Link to={"/login"}>Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
