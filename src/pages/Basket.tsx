import React from "react";
import BasketItems from "../components/BasketItems";
import "../styles/App.css";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { useDispatch,useSelector } from "react-redux";
import { setTotalPrice, clearBasketItems } from "../redux/products/productsSlice";
import { homeItem } from "../types/Type";
import { RootState } from "../redux/store";

const Basket: React.FC = () => {

  const basket = useSelector((state:RootState)=>state.products.basket);
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
      <button className="btn btn-outline-danger" onClick={clearBasket}>Clear Basket</button>
      <br/><br/>
      <div>
        {basket.map((item:homeItem) => {
          return <BasketItems product={item} key={item.id}/>
        })}
      </div>
      <div style={{marginTop: "13vh"}}>
        <h3 className={theme ? `lightTheme basket-total-price` : `nightTheme basket-total-price`}>Total Price: ${totalPrice.toFixed(2)}</h3>
        <br/>
        <br/>
        <button onClick={buyClick} className="btn btn-success" style={{width: "100%"}}>Buy</button>
      </div>
      <div style={{height: "36.2vh"}}  className={theme ? `lightTheme backgroundLightTheme` : `nightTheme backgroundNightTheme`}>

      </div>
    </div>
  );
};

export default Basket;
