import React, { useState, useEffect }  from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";
import Users from "./Users";
import { UserType } from "../types/Type";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { setRegisterControl, setUserLoggedIn, setWelcomeUser} from "../redux/users/usersSlice";
import { RootState } from "../redux/store";
import { getUsersAsync } from "../services/userService";

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const userLoggedIn = useSelector((state: RootState) => state.users.userLoggedIn);
  const users = useSelector((state: RootState) => state.users.users);

  const [input, setInput] = useState<UserType>({ username: "", password: "" });

  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  const userLogin = () => {
    const newArr = users.map((item: UserType) =>
        item.username === input.username && item.password === input.password
    );

    if (newArr.includes(true)) {
      if(input.username)
      dispatch(setWelcomeUser(input.username));
      <Link to="/users" />;
      toast.success("Kullanıcı Girişi Başarılı...");
      dispatch(setUserLoggedIn(true));
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
        <Users />
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
