import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { Link, Navigate } from "react-router-dom";
import Users from "./UserPage";
import { mdlUser } from "../types/Type";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import {
  setActiveUser,
  setAdminLoggedIn,
  setRegisterControl,
  setUserLoggedIn,
} from "../redux/users/usersSlice";
import { RootState } from "../redux/store";
import { getUsersAsync } from "../services/userService";

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const { userLoggedIn, adminLoggedIn } = useSelector(
    (state: RootState) => state.users
  );
  const users = useSelector((state: RootState) => state.users.users);

  const [input, setInput] = useState<mdlUser>({
    id: "",
    username: "",
    password: "",
    role: 0,
  });

  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  const userLogin = () => {
    const User = users.filter((item: mdlUser) => {
      if (
        item.username === input.username &&
        item.password === input.password
      ) {
        return item;
      }
    });

    if (User.length > 0) {
      if(User[0].role === 0)
      {
        if (input.username) dispatch(setActiveUser(User[0]));
        toast.success("Kullanıcı Girişi Başarılı...");
        dispatch(setUserLoggedIn(true));
      }else{
        dispatch(setActiveUser(User[0]));
        toast.success("Admin Girişi Başarılı...");
        dispatch(setAdminLoggedIn(true));
      }
    } else {
      toast.error("Kullanıcı adı ya da şifre hatalı!");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      {userLoggedIn ? (
        <Navigate to="/userpage" />
      ) : adminLoggedIn ? (
        <Navigate to="/adminpanel" />
      ) : (
        <div>
          <div className="login">
            <form className="loginForm">
              <div className="form-outline mb-4">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <button
                type="button"
                className="btn btn-primary btn-block mb-4"
                onClick={userLogin}
              >
                Sign in
              </button>

              <div className="text-center">
                <p className={`nightTheme`}>
                  Not a member?{" "}
                  <Link
                    to="/register"
                    onClick={() => dispatch(setRegisterControl(false))}
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
