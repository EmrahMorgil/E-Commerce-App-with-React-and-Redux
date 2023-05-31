import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { clearBasketItems, setTotalPrice } from '../../redux/products/productsSlice';
import { toast } from 'react-toastify';

const BuyBasketItemButton: React.FC = () => {

    const totalPrice = useSelector((state:RootState)=>state.products.totalPrice);
    const userLoggedIn = useSelector((state:RootState)=>state.users.userLoggedIn);
    const dispatch = useDispatch();

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
    <button onClick={buyClick} className="btn btn-success" style={{width: "40%"}}>Buy</button>
  )
}

export default BuyBasketItemButton