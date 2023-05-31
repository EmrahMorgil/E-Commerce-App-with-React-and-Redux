import { Link } from "react-router-dom";
import { basketItemType } from "../../types/Type";
import AddBasketButton from "./AddBasketButton";

const Product: React.FC<basketItemType> = ({ product }) => {
  
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  return (
    <div className="item">
      <div className="productsContainer reveal">
        <Link to={`/product/${product?.id}`} style={{ textDecoration: "none" }}>
          <div className="productsWrapper">
            <div className="banner-image">
              <img src={product.photo[0]} style={{width: "130px", height: "200px"}}/>
            </div>
            <h4 style={{color: "white"}}>{product?.name}</h4>
            <p>
              ${product.price}
            </p>
          </div>
        </Link>
        <div className="button-wrapper">
          <Link to={`/product/${product?.id}`}><button className="btn outline mr-3">DETAILS</button></Link>
          <AddBasketButton product={product}/>
        </div>
      </div>
    </div>
  );
};

export default Product;
