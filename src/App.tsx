import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Basket from "./pages/Basket";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import Products from "./pages/Products";
import FocusProduct from "./pages/FocusProduct";
import Footer from "./components/Footer";
import AdminPanel from "./pages/AdminPanel";
import UserPage from "./pages/UserPage";
import Protected from "./components/Protected";

function App() {
  const {userLoggedIn, adminLoggedIn} = useSelector((state: RootState) => state.users);

  return (
    <>
      <div className="main" style={{ backgroundColor: "black" }}>
        <Navbar />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userpage" element={<Protected loggedIn={userLoggedIn}><UserPage /></Protected>} />
          <Route path="/product/:id" element={<FocusProduct />} />
          <Route path="/adminpanel" element={<Protected loggedIn={adminLoggedIn}><AdminPanel /></Protected>}/>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
