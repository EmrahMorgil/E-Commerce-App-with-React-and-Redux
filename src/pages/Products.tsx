import React from "react";
import ProductList from "../components/Product/ProductList";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Products: React.FC = () => {
  return (
    <>
      <div className="product-background" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <h3 style={{color: "black", fontWeight: "bold", fontSize: "45px"}}>Lorem ipsum dolor sit amet. </h3>
        <p style={{color: "black", fontWeight: "bold", fontSize: "20px"}}>Products</p>
        <div><ArrowDropDownIcon /></div>
      </div>
      <ProductList />
    </>
  );
};

export default Products;
