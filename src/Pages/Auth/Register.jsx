import React from "react";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit,formState:{errors} } = useForm();

  const handleRegistration = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-secondary min-h-screen min-w-screen">
      <Navbar></Navbar>
      <div className="flexCenter flex-col bg-white w-100 mx-auto mt-50 py-30 rounded-xl">
        <h1 className="heading1">Create Your Account</h1>
        <p className="mt-2 px-8 text-center">
          Join StyleDecor to book and manage your decorations.
        </p>
        <div>
          <form onSubmit={handleSubmit(handleRegistration)}>
            <fieldset className="fieldset mt-10">
              <label className="label paragraph2">Full Name</label>
               {errors.name?.type==="required" && <p className="text-red-400">Email is required</p> }
              <input
                type="text"
                {...register("name", { required: true })}
                className="input w-70"
                placeholder="Enter your Name"
              />
             
              <label className="label paragraph2">Email</label>
              <input
                type="email"
                {...register("email"),{ required: true }}
                className="input w-70"
                placeholder="Enter your Email"
              />
              <label className="label paragraph2">Password</label>
              <input
                type="password"
                {...register("password"),{ required: true },{minLength:5}}
                className="input"
                placeholder="Enter yourPassword"
              />

              <button className="btn-primary mt-4">Login</button>
            </fieldset>
          </form>
        </div>
        <p className="mt-2">
          If you are already registed please
          <span>
            <Link className="text-primary mx-2 font-bold" to={"/login"}>
              Login
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
