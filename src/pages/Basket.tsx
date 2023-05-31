import React from "react";
import BasketItems from "../components/Basket/BasketItem";
import "../styles/App.css";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { useDispatch,useSelector } from "react-redux";
import { setTotalPrice, clearBasketItems } from "../redux/products/productsSlice";
import { RootState } from "../redux/store";
import BasketList from "../components/Basket/BasketList";

const Basket: React.FC = () => {

  
  const totalPrice = useSelector((state:RootState)=>state.products.totalPrice);
  const userLoggedIn = useSelector((state:RootState)=>state.users.userLoggedIn);
  const theme = useSelector((state:RootState)=>state.theme.theme);

  const dispatch = useDispatch();

  const clearBasket = () =>{
    dispatch(setTotalPrice(0));
    dispatch(clearBasketItems());
  }


  const buyClick = () =>{
    if(userLoggedIn)
    { 
      if(totalPrice>0)
      {
          toast.success("Satın Alma Başarılı!");
          dispatch(setTotalPrice(0));
          dispatch(clearBasketItems());
      }else{
        toast.warning("Önce sepetine bir şeyler eklemelisin!");
      }
    }else{
      toast.error("Önce Giriş Yapmalısın!");
    }

  }

  return (
    <div className="basket"> 
      <h3 className={theme ? `lightTheme basket-total-price` : `nightTheme basket-total-price`}>Basket</h3>
      <hr style={{border: "1px solid white"}}/>
      <br/><br/>
      <div>
        <BasketList />
      </div>
    </div>
  );
};

export default Basket;
