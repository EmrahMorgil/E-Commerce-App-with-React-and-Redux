import { Link } from "react-router-dom";
import { basketItemType } from "../../types/Type";
import AddBasketButton from "../Basket/AddBasketButton";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import DeleteProductButton from "../AdminPanel/DeleteProduct/DeleteProductButton";
import UpdateProductModal from "../AdminPanel/UpdateProduct/UpdateProductModal";
import SyncAltIcon from '@mui/icons-material/SyncAlt';

const Product: React.FC<basketItemType> = ({ product, page }) => {
  
  const adminLoggedIn = useSelector(
    (state: RootState) => state.users.adminLoggedIn
  );

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

  return (<section id="products">

    <div className="item">
      <div className={page == "adminpanel" ? "productsContainer" : "productsContainer reveal"}
        style={{ backgroundColor: "#1C1C1C" }}
      >
        <a href={`/product/${product.id}`} style={{ textDecoration: "none" }}>
          <div className="productsWrapper">
            <div className="banner-image">
              <img
                src={product.photo[0]}
                style={{ width: "60px", height: "100px" }}
              />
            </div>
            <h4 style={{ color: "white" }}>{product?.name}</h4>
            <p>${product.price}</p>
          </div>
        </a>
        <div className="button-wrapper">
          {page == "adminpanel" ? (
            <div style={{display: "flex", gap: "1rem"}}>
              <button
                type="button"
                className="btn btn-warning"
                data-toggle="modal"
                data-target={`#update${product.id}`}
              >
                <SyncAltIcon />
              </button>
              <UpdateProductModal product={product}/>

              <DeleteProductButton product={product} />
            </div>
          ) : (
            <>
              <a href={`/product/${product.id}`} style={{ textDecoration: "none" }}>
                <button className="pbtn outline mr-3">DETAILS</button>
              </a>
              <AddBasketButton product={product} />
            </>
          )}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Product;
