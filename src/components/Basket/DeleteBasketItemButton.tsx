import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { basketAmount, deleteBasket, setTotalPrice } from "../../redux/products/productsSlice";
import { mdlProduct } from "../../types/Type";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export interface IDeleteBasketItemButton{
    product: mdlProduct;
}

const DeleteBasketItemButton: React.FC<IDeleteBasketItemButton> = ({product}) => {

    const totalPrice = useSelector((state: RootState) => state.products?.totalPrice);
    const basket = useSelector((state: RootState) => state.products.basket);
    const dispatch = useDispatch();

    const deleteItem = (id?: number) => {
        let updatePrice = totalPrice - Number(product?.price) * Number(product?.amount);
        if (updatePrice < 0.1) {
          updatePrice = 0;
        }
        dispatch(setTotalPrice(updatePrice));
      
        const newBasket = basket.filter((item: mdlProduct) => {
          return item.id !== id;
        });
        dispatch(deleteBasket(newBasket));
    
        let count = 0;
        newBasket.map((item: mdlProduct) => {
          return count += item.amount;
        });
    
        dispatch(basketAmount(count));
      };

  return (
    <DeleteForeverIcon onClick={() => deleteItem(product?.id)} style={{color: "white"}}/>
  );
};

export default DeleteBasketItemButton;
