import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Products";
import Basket from "./pages/Basket";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Users from "./pages/Users";
import FocusItem from "./pages/FocusItem";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import Products from "./pages/Products";

function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const userLoggedIn = useSelector((state: RootState) => state.users.userLoggedIn);

  return (
    <>
      <div style={{ backgroundColor: theme ? "white" : "black" }}>
        <Navbar />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={userLoggedIn && <Users />} />
          <Route path="/product/:id" element={<FocusItem />} />
        </Routes>
      </div>
    </>
  );
}

export default App;