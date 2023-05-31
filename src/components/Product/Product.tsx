import { Link } from "react-router-dom";
import { basketItemType } from "../../types/Type";
import AddBasketButton from "./AddBasketButton";

const Product: React.FC<basketItemType> = ({ product }) => {
  

  return (
    <div className="item">
      <div className="productsContainer">
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
