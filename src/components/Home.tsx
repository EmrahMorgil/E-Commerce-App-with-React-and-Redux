import React from "react";
import Items from "./Items";
import "../styles/App.css";
import { homeItem } from "../types/Type";
import { getProductsAsync } from "../redux/products/productsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import { RootState } from "../redux/store";

const Home: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.items);
  const status = useSelector((state: RootState) => state.products.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(getProductsAsync());
    }
  }, [dispatch, status]);

  if(status === "loading")
  {
    return <div className="loading"><HourglassBottomIcon className="loadingIcon"/></div>
  }

  return (
    <div className="cards">
      {products.map((item: homeItem, index: number) => {
        return <Items product={item} key={index} />;
      })}
    </div>
  );
};

export default Home;
