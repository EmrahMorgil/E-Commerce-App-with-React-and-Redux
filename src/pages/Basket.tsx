import React from "react";
import "../styles/App.css";
import 'react-toastify/dist/ReactToastify.css';
import BasketList from "../components/Basket/BasketList";

const Basket: React.FC = () => {

  return (
    <div className="basket"> 
      <h3 className={`nightTheme basket-total-price`}>Basket</h3>
      <hr style={{border: "1px solid white"}}/>
      <br/><br/>
      <div>
        <BasketList />
      </div>
    </div>
  );
};

export default Basket;
