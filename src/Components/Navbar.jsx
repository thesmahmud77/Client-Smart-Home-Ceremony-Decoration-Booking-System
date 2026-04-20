import React, { use } from "react";
import navlogo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import profileDp from "../assets/profile-dp.png";
import MainContainer from "../Container/MainContainer";
import { AuthContext } from "../Pages/Firebase/Context & Provider/AuthContext";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    logOut();
  };
  return (
    <MainContainer>
      <div className="grid grid-cols-12 py-4">
        <Link
          to={"/"}
          className="logo col-span-3 flex items-start justify-center gap-2"
        >
          <div>
            <img src={navlogo} alt="" />
          </div>
          <h1 className="text-2xl font-bold text-primary">Style Decor</h1>
        </Link>
        <div className="NavMenu  col-span-6 flexCenter gap-3">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-primary font-bold" : "text-foreground"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/service"}
            className={({ isActive }) =>
              isActive ? "text-primary  font-bold" : "text-foreground"
            }
          >
            Services
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "text-primary  font-bold" : "text-foreground"
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive ? "text-primary  font-bold" : "text-foreground"
            }
          >
            Contact
          </NavLink>
          <h1>{user ? "Logined" : "Not Login yet"}</h1>
        </div>
        <div className="Profile  col-span-3  flex items-center justify-center gap-3">
          <NavLink
            to={"/user-deshboard"}
            className={({ isActive }) =>
              isActive ? "text-primary  font-bold" : "btn-secondary"
            }
          >
            Dashboard
          </NavLink>
          {user ? (
            <button onClick={handleLogout} className="btn btn-primary">
              Logout
            </button>
          ) : (
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "text-foreground"
              }
            >
              Login
            </NavLink>
          )}
          <NavLink className={"w-10 h-10"}>
            <img width={50} height={50} src={profileDp} alt="" />
          </NavLink>
        </div>
      </div>
    </MainContainer>
  );
};

export default Navbar;
