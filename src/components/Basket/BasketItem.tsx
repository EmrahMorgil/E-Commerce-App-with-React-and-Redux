import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { basketItemType, mdlProduct } from "../../types/Type";
import {
  basketAmount,
  deleteBasket,
  setBasket,
  setTotalPrice,
  addBasket,
} from "../../redux/products/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import DeleteBasketItemButton from "./DeleteBasketItemButton";

const BasketItem: React.FC<basketItemType> = ({ product }) => {
  const dispatch = useDispatch();
  const totalPrice = useSelector((state: RootState) => state.products.totalPrice);
  const basket = useSelector((state: RootState) => state.products.basket);

  const decrement = () => {
    dispatch(basketAmount(0));
    dispatch(setTotalPrice(totalPrice - Number(product?.price)));

    let index = basket.find((item: mdlProduct) => product.id === item.id);

    let newItem = { ...index };
    if (newItem.amount) {
      newItem.amount--;
    }
    dispatch(setBasket({ id: newItem.id, amount: newItem.amount! }));
  };
  const increment = () => {
    dispatch(basketAmount(-1));
    dispatch(setTotalPrice(Number(totalPrice) + Number(product?.price)));

    let index = basket.find((item: mdlProduct) => product?.id === item.id);

    if (index)
      if (basket.includes(index)) {
        let newItem = { ...index };
        newItem.amount++;
        dispatch(
          setBasket({
            id: newItem.id,
            amount: newItem.amount,
          })
        );
      } else {
        if (product) dispatch(addBasket(product));
      }
  };
  
  return (
    <>
      {Number(product?.amount) > 0 && totalPrice > 0 && (
        <div style={{ display: "flex" }}>
          <img
            className="card-img-top basket-item-img"
            src={product.photo[0]}
            alt={product?.name}
          />
          <div className="card-detail">
            <h5 className={`nightTheme card-title`}>{product?.name}</h5>
            <p className={`nightTheme card-text`}>${product?.price}</p>
            <div style={{ display: "flex" }}>
              <div className="basket-item-amount">
                {product.amount === 1 ? (
                  <DeleteBasketItemButton product={product} />
                ) : (
                  <RemoveIcon
                    style={{ cursor: "pointer" }}
                    className={`nightTheme`}
                    onClick={decrement}
                  />
                )}
                <p className={`nightTheme`}>
                  {product?.amount}
                </p>
                <AddIcon
                  className={`nightTheme`}
                  style={{ cursor: "pointer" }}
                  onClick={increment}
                />
              </div>
              <div>
                {product.amount > 1 && (
                  <DeleteBasketItemButton product={product} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <br />
    </>
  );
};

export default BasketItem;
