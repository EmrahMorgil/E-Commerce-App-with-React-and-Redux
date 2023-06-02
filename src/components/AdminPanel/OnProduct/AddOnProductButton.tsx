import React from 'react'
import { mdlProduct } from '../../../types/Type';

export interface IAddOnProductButton{
    productPhoto: string;
    setProductPhoto: React.Dispatch<React.SetStateAction<string>>;
    newProduct: mdlProduct;
    setNewProduct: any;
}

const AddOnProductButton: React.FC<IAddOnProductButton> = ({productPhoto, setProductPhoto, newProduct, setNewProduct}) => {


    const addPhoto = (e: any)=>{
      setProductPhoto("");
      e.preventDefault();  
      setNewProduct({...newProduct, ["photo"]: [...newProduct.photo, productPhoto]});
}

  return (
    <button className='btn btn-success mt-1' onClick={(e)=>addPhoto(e)}>Add Photo</button>
  )
}

export default AddOnProductButton