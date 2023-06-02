import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  addBasket,
  basketAmount,
  setBasket,
  setTotalPrice,
} from "../../redux/products/productsSlice";
import { mdlProduct } from "../../types/Type";

export interface IAddBasketButton {
  product: mdlProduct;
}

const AddBasketButton: React.FC<IAddBasketButton> = ({ product }) => {
  const dispatch = useDispatch();

  const { basket, totalPrice } = useSelector(
    (state: RootState) => state.products
  );

  const addBasketItem = () => {
    dispatch(basketAmount(-1));
    dispatch(setTotalPrice(Number(totalPrice) + Number(product.price)));

    let index = basket.find((item: mdlProduct) => product.id === item.id);

    if (index) {
      if (basket.includes(index)) {
        let newItem = { ...index };

        newItem.amount++;
        dispatch(
          setBasket({
            id: newItem.id,
            amount: newItem.amount,
          })
        );
      }
    } else {
      if (product) dispatch(addBasket(product));
    }
  };

  return (
    <button className="pbtn fill" onClick={addBasketItem}>
      BUY NOW
    </button>
  );
};

export default AddBasketButton;
