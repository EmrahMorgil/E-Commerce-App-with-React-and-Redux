import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { homeItem } from "../types/Type";

const FocusProduct: React.FC = () => {
  const [clickedData, setClickedData] = useState<homeItem>({id: 0, photo: "", name: "", price: "", amount: 0});

  let { id } = useParams();

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:3004/products/${id}`);
    setClickedData(response.data);
  };

  useEffect(() => {
    fetchData();
  });


  return (
   <div className="row" style={{padding: "50px 280px", backgroundColor: "#B0B0B0"}}>
    <div className="col" style={{height: "40rem"}}>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        
        <div className="carousel-inner mt-4">
          <div className="carousel-item active">
            <img className="d-block w-100" style={{height: "500px"}} src={clickedData.photo} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" style={{height: "500px"}} src={clickedData.photo} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" style={{height: "500px"}} src={clickedData.photo} alt="Third slide" />
          </div>
        </div>
        
        <ol className="carousel-indicators">
          <img src={clickedData.photo} style={{width: "60px", height: "60px", border: "1px solid grey"}} data-target="#carouselExampleIndicators" data-slide-to={0} className="active"/>
          <img src={clickedData.photo} style={{width: "60px", height: "60px", border: "1px solid grey"}} data-target="#carouselExampleIndicators" data-slide-to={1} />
          <img src={clickedData.photo} style={{width: "60px", height: "60px", border: "1px solid grey"}} data-target="#carouselExampleIndicators" data-slide-to={2} />
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <ul>
            <li>Color: <span>Black</span></li>
            <li>Available: <span>in stock</span></li>
            <li>Shipping Area: <span>All over the world</span></li>
            <li>Shipping Fee: <span>Free</span></li>
          </ul>
        </div>
        <div className="purchase-info">
          <button type="button" className="btn">
            Add to Cart <i className="fas fa-shopping-cart" />
          </button>
        </div>
      </div>
      


    </div>
   </div>
  );
};

export default FocusProduct;
