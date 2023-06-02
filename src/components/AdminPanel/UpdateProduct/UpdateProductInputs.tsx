import React, { useState } from "react";
import { mdlProduct } from "../../../types/Type";

export interface IUpdateProductInputs {
  updateProduct: mdlProduct;
  setUpdateProduct: React.Dispatch<React.SetStateAction<mdlProduct>>;
}

const UpdateProductInputs: React.FC<IUpdateProductInputs> = ({ updateProduct, setUpdateProduct }) => {

    const handleChange = (e: any)=>{
        setUpdateProduct({...updateProduct, [e.target.name]: e.target.value});
    }

    const photoChange = (e: any, i: string)=>{
      let updatedPhotos = updateProduct.photo.map((photo: string)=>{
        if(photo==i)
        {
          return e.target.value;
        }else{
          return photo;
        }
      });
      setUpdateProduct({...updateProduct, ["photo"]: updatedPhotos});
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
        <input name='photo' />
        <button className='btn btn-success mt-1' >Add Photo</button>
      </div>
    </div>
  );
};

export default UpdateProductInputs;
