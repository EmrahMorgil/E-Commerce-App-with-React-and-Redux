import React from "react";
import { mdlProduct } from "../../types/Type";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import BasketItem from "./BasketItem";
import BuyBasketItemButton from "./BuyBasketItemButton";

const BasketList: React.FC = () => {
  const basket = useSelector((state: RootState) => state.products.basket);
  const totalPrice = useSelector(
    (state: RootState) => state.products.totalPrice
  );

  return (
    <div className="row">
      <div className="col">
        {basket.map((item: mdlProduct) => {
          return <BasketItem product={item} key={item.id} />;
        })}
      </div>
      <div className="col" style={{justifyContent: "flex-end", display: "flex"}}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "45px"}}>
        <h6 style={{color: "white"}}>Selected Products: {basket.length}</h6>
      <h3 className={`nightTheme basket-total-price`}>Total Price: ${totalPrice.toFixed(2)}</h3>
        <BuyBasketItemButton />
        </div>
      </div>
    </div>
  );
};

export default BasketList;
