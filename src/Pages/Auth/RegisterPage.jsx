import React, { use } from "react";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Firebase/Context & Provider/AuthContext";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser } = use(AuthContext);

  const handleRegister = (data) => {
    // console.log(data.email, data.password);
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-secondary min-h-screen min-w-screen">
      <Navbar></Navbar>
      <section>
        <div className="flexCenter flex-col bg-white w-100 mx-auto mt-50 py-30 rounded-xl">
          <h1 className="heading1">Create Your Account</h1>
          <p className="mt-2 px-8 text-center">
            Join StyleDecor to book and manage your decorations.
          </p>
          <div>
            <form onSubmit={handleSubmit(handleRegister)}>
              <fieldset className="fieldset mt-10">
                <label className="label paragraph2">Full Name</label>
                <input
                  type="text"
                  {...register("name", { required: true, minLength: 10 })}
                  className="input w-70"
                  placeholder="Enter your Name"
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-500">Email is required</p>
                )}

                <label className="label paragraph2">Email</label>
                <input
                  type="email"
                  className="input w-70"
                  {...register("email", { required: true })}
                  placeholder="Enter your Email"
                />
                <label className="label paragraph2">Password</label>
                <input
                  type="password"
                  className="input"
                  {...register("password", {
                    required: true,
                    minLength: 10,
                    pattern: "/Ab00/",
                    message:
                      "পাসওয়ার্ডে অন্তত ৮টি ক্যারেক্টার, একটি সংখ্যা এবং একটি অক্ষর থাকতে হবে",
                  })}
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
      </section>
    </div>
  );
};

export default RegisterPage;
