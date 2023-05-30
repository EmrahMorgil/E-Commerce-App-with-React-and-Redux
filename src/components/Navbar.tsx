import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../redux/theme/themeSlice";
import PersonIcon from "@mui/icons-material/Person";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { RootState } from "../redux/store";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const basketAmount = useSelector((state: RootState) => state.products.basketAmount);

  // const changeThemeLight = () => {
  //   dispatch(setTheme(false));
  //   localStorage.setItem("theme", "dark");
  // };

  // const changeThemeDark = () => {
  //   dispatch(setTheme(true));
  //   localStorage.setItem("theme", "light");
  // };

  return (
    <nav className="navbar justify-content-between">
      <div className="navbar-brand">
        <Link
          to="/products"
          style={{ textDecoration: "none" }}
          className={"navbar-title-nightTheme"}>
          E - Commerce App
        </Link>
      </div>

      <p style={{ position: "absolute" }}></p>

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
