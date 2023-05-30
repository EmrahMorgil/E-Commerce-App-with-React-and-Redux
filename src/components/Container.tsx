import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Basket from "./Basket";
import FocusItem from "./FocusItem";
import Login from "./Login";
import Users from "./Users";
import Register from "./Register";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Container: React.FC = () => {

  const theme = useSelector((state:RootState)=>state.theme.theme);
  const userLoggedIn = useSelector((state:RootState)=>state.users.userLoggedIn);
  
  return (
    <div style={{ backgroundColor: theme ? "white" : "black" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={userLoggedIn && <Users />} />
        <Route path="/product/:id" element={<FocusItem />} />
      </Routes>
    </div>
  );
};

export default Container;
