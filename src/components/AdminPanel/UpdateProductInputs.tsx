import React, { useState } from "react";
import { mdlProduct } from "../../types/Type";

export interface IUpdateProductInputs {
  product: mdlProduct;
}

const UpdateProductInputs: React.FC<IUpdateProductInputs> = ({ product }) => {

    const [updateProduct, setUpdateProduct] = useState<mdlProduct>({
        id: product.id,
        photo: product.photo,
        name: product.name,
        price: product.price,
        amount: product.amount
    });

    const handleChange = (e: any)=>{
        setUpdateProduct({...updateProduct, [e.target.name]: e.target.value});
    }

    const photoChange = (e: any)=>{
        // let updatedPhotos = updateProduct.photo.map((photo: string)=>{
        //     if(photo===i)
        //     {
        //         return e.target.value;
        //     }else{
        //         return photo;
        //     }
        // });
        // console.log(updatedPhotos);
        // setUpdateProduct({...updateProduct,["photo"]: updatedPhotos});
    }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <label>Product Name: </label>
        <input value={updateProduct.name} onChange={handleChange} name="name"/>
      </div>
      <div>
        <label>Product Price: </label>
        <input value={updateProduct.price} onChange={handleChange} name="price"/>
      </div>
      <div style={{ display: "flex" }}>
        <label>Product Photos: </label>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {updateProduct.photo.map((i) => {
            return <input style={{ height: "2rem" }} value={i}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default UpdateProductInputs;
