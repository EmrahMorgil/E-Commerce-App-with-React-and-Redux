import React from "react";
import { mdlProduct } from "../../types/Type";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import BasketItem from "./BasketItem";

const BasketList: React.FC = () => {

    const basket = useSelector((state:RootState)=>state.products.basket);
    const totalPrice = useSelector((state:RootState)=>state.products.totalPrice);
    const theme = useSelector((state:RootState)=>state.theme.theme);

  return (
    <div>
      {basket.map((item: mdlProduct) => {
        return <BasketItem product={item} key={item.id} />;
      })}
      <h3 className={theme ? `lightTheme basket-total-price` : `nightTheme basket-total-price`}>Total Price: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default BasketList;
