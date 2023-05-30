import "../styles/App.css";
import { Link } from "react-router-dom";
import { basketItemType, homeItem } from "../types/Type";
import { setTotalPrice, addBasket, setBasket} from "../redux/products/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { basketAmount } from "../redux/products/productsSlice";
import { RootState } from "../redux/store";

const Items: React.FC<basketItemType> = ({ product }) => {
  const dispatch = useDispatch();

  const { basket, totalPrice } = useSelector((state: RootState) => state.products);

  const addBasketItem = () => {
    dispatch(basketAmount(-1));
    dispatch(setTotalPrice(Number(totalPrice) + Number(product?.price)));

    let index = basket.find((item: homeItem) => product?.id === item.id);
    
    if(index)
    {
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
    }else {
      if (product) dispatch(addBasket(product));
    }
  };

  return (
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
        <i
          className="card-text"
          style={{ color: "grey", marginBottom: "20px" }}
        >
          ${product?.price}
        </i>
      </Link>
      <button onClick={addBasketItem} className="btn btn-success">
        Buy
      </button>
    </div>
  );
};

export default Items;
