import { Link } from "react-router-dom";
import { basketItemType, homeItem } from "../../types/Type";
import {
  setTotalPrice,
  addBasket,
  setBasket,
} from "../../redux/products/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { basketAmount } from "../../redux/products/productsSlice";
import { RootState } from "../../redux/store";

const Product: React.FC<basketItemType> = ({ product }) => {
  const dispatch = useDispatch();

  const { basket, totalPrice } = useSelector(
    (state: RootState) => state.products
  );

  const addBasketItem = () => {
    dispatch(basketAmount(-1));
    dispatch(setTotalPrice(Number(totalPrice) + Number(product?.price)));

    let index = basket.find((item: homeItem) => product?.id === item.id);

    if (index) {
      if (basket.includes(index)) {
        let newItem = { ...index };

        newItem.amount++;
        dispatch(
          setBasket({
            id: newItem.id,
            amount: newItem.amount,
          })
        );
      }
    } else {
      if (product) dispatch(addBasket(product));
    }
  };

  <div className="item">
    <Link
      to={`/product/${product?.id}`}
      className="card link-item"
      style={{ textDecoration: "none" }}
    >
      <img
        className="card-img-top item-img"
        src={product?.photo}
        alt={product?.name}
      />
      <br />
      <h5 className="card-title" style={{ color: "black" }}>
        {product?.name}
      </h5>
      <i className="card-text" style={{ color: "grey", marginBottom: "20px" }}>
        ${product?.price}
      </i>
    </Link>
    <button onClick={addBasketItem} className="btn btn-success">
      Buy
    </button>
  </div>;

  return (
    <div className="item">
      <div className="productsContainer">
        <Link to={`/product/${product?.id}`} style={{ textDecoration: "none" }}>
          <div className="productsWrapper">
            <div className="banner-image">
              <img src={product?.photo} style={{width: "200px", height: "200px"}}/>
            </div>
            <h4 style={{color: "white"}}>{product?.name}</h4>
            <p>
              ${product?.price}
            </p>
          </div>
        </Link>
        <div className="button-wrapper">
          <Link to={`/product/${product?.id}`}><button className="btn outline mr-3">DETAILS</button></Link>
          <button className="btn fill" onClick={addBasketItem}>BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
