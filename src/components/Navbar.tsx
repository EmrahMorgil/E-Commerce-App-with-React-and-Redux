import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { useSelector, useDispatch } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";
import { RootState } from "../redux/store";

const Navbar: React.FC = () => {
  const basketAmount = useSelector((state: RootState) => state.products.basketAmount);



  return (
    <nav className="navbar justify-content-between">
      <div className="navbar-brand">
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          className={"navbar-title-nightTheme"}>
          E - Commerce App
        </Link>
      </div>


      <div style={{display: "flex", gap: "2rem"}}>
      <div>
        <Link to="/login">
          <PersonIcon
            className="navbar-title-nightTheme"
          ></PersonIcon>
        </Link>
      </div>

        <div>

        <div
          className={`nightTheme navbar-count`}
          >
          {basketAmount}
        </div>
        <div className="navbar-item">
          <Link to="/basket">
            <LocalGroceryStoreIcon
              className={`navbar-title-nightTheme`}
            />
          </Link>
        </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
