import React, { useState } from "react";
import { mdlProduct } from "../../../types/Type";

export interface IUpdateProductInputs {
  updateProduct: mdlProduct;
  setUpdateProduct: React.Dispatch<React.SetStateAction<mdlProduct>>;
  productPhoto: string;
  setProductPhoto: React.Dispatch<React.SetStateAction<string>>;
}

const UpdateProductInputs: React.FC<IUpdateProductInputs> = ({ updateProduct, setUpdateProduct, productPhoto, setProductPhoto }) => {

    const handleChange = (e: any)=>{
        setUpdateProduct({...updateProduct, [e.target.name]: e.target.value});
    }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{display: "flex", flexDirection: "column"}}>
        <label style={{textAlign: "center"}}>Product Name: </label>
        <input value={updateProduct.name} onChange={handleChange} name="name"/>
      </div>
      <div style={{display: "flex", flexDirection: "column"}}>
        <label style={{textAlign: "center"}}>Product Price: </label>
        <input value={updateProduct.price} onChange={handleChange} name="price"/>
      </div>
      <div style={{display: "flex", flexDirection: "column"}}>
        <label style={{textAlign: "center"}}>Product Photos: </label>
        <input name='photo' onChange={(e)=>setProductPhoto(e.target.value)} style={{width: "200px"}} value={productPhoto}/>
      </div>
    </div>
  );
};

export default UpdateProductInputs;
