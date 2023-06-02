import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mdlProduct } from "../types/Type";
import AddBasketButton from "../components/Basket/AddBasketButton";

const FocusProduct: React.FC = () => {
  const [clickedData, setClickedData] = useState<mdlProduct>({id: "", photo: [], name: "", price: "", amount: 0});

  let { id } = useParams();

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:3004/products/${id}`);
    setClickedData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // window.scrollTo(0, 0);

  return (
    <section>

    
   <div className="row" style={{padding: "0px 280px", backgroundColor: "#B0B0B0"}}>
    <div className="col" style={{height: "40rem"}}>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{width: "300px",marginLeft: "5rem"}}>
        
        <div className="carousel-inner mt-4">
        {clickedData.photo.map((i, key)=>{
          return (
                  <div className={`${key === 0 ? "carousel-item active" : "carousel-item"}`}>
                    <img className="focusPhoto" src={i} alt="First slide" />
                  </div>
                )
        })}
        </div>
        <ol className="carousel-indicators" style={{gap: "5px", display: "flex", flexWrap: "wrap"}}>
          {clickedData.photo.map((i, key)=>{
            return <img src={i} style={{width: "40px", height: "60px"}} data-target="#carouselExampleIndicators" data-slide-to={key}/>
          })}
          </ol>
      </div>
    </div>
    <div className="col" style={{height: "40rem"}}>

      <div className="product-content">
        <h2 className="product-title">{clickedData.name}</h2>
        <div className="product-rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
          <span>4.7(21)</span>
        </div>
        <div className="product-price">
          <p className="new-price">Price: <span>$ {clickedData.price}</span></p>
        </div>
        <div className="product-detail">
          <h2>about this phone: </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
          <ul>
            <li>Color: <span>Black</span></li>
            <li>Available: <span>in stock</span></li>
            <li>Shipping Area: <span>All over the world</span></li>
            <li>Shipping Fee: <span>Free</span></li>
          </ul>
        </div>
        <div className="purchase-info">
          <AddBasketButton product={clickedData}/>
        </div>
      </div>
      


    </div>
   </div>
   </section>
  );
};

export default FocusProduct;
