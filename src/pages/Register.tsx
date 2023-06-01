import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Login from "./Login";
import { UserType } from "../types/Type";
import { useSelector, useDispatch } from "react-redux";
import { setRegisterControl } from "../redux/users/usersSlice";
import { addUsers } from "../redux/users/usersSlice";
import { RootState } from "../redux/store";
import { nanoid } from "@reduxjs/toolkit";

const Register: React.FC = () => {
  const dispatch = useDispatch();

  const users = useSelector((state: RootState) => state.users.users);
  const registerControl = useSelector((state: RootState) => state.users.registerControl);

  const [input, setInput] = useState<UserType>({id: "", username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const userRegister = async () => {
    const newArr = users.map((item: UserType) => item.username === input.username);

    if (newArr.includes(true)) {
      toast.error("Seçtiğiniz Kullanıcı Adı Kullanılıyor!");
    } else {
      let randomId = nanoid();
      dispatch(
        addUsers({ id: randomId, username: input.username, password: input.password })
      );

      await axios.post("http://localhost:3004/users", {
        id: randomId,
        username: input.username,
        password: input.password,
      });
      toast.success("Kayıt Başarılı!");
      setInput({ id: "", username: "", password: "" });
      dispatch(setRegisterControl(true));
    }
  };

  return (
    <div>
      {registerControl ? (
        <Login />
      ) : (
        <div className="login">
          <form className="loginForm">
            <div className="form-outline mb-4">
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Username"
                onChange={handleChange}
                value={input.username}
              />
            </div>

            <div className="form-outline mb-4">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                onChange={handleChange}
                value={input.password}
              />
            </div>

            <button
              type="button"
              className="btn btn-success btn-block mb-4"
              onClick={userRegister}
            >
              Register
            </button>

            <div className="text-center">
              <p className={`nightTheme`}>
                Have already an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Register;
