import React from 'react'
import { mdlProduct } from '../../types/Type'
import { addProducts } from '../../redux/products/productsSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addProductsAsync } from '../../services/productService';

export interface IAddProductButton{
    newProduct: mdlProduct;
    setNewProduct: React.Dispatch<React.SetStateAction<mdlProduct>>;
  setProductPhoto: React.Dispatch<React.SetStateAction<string>>;
}

const AddProductButton: React.FC<IAddProductButton> = ({newProduct, setNewProduct, setProductPhoto}) => {
    const dispatch = useDispatch();

    const AddNewProduct = (newProduct: mdlProduct)=>{
      if(newProduct.name!=="" && newProduct.photo.length!==0 && newProduct.price!=="")
      {
          newProduct.id = nanoid();
          dispatch(addProducts(newProduct));
          addProductsAsync(newProduct);
          setNewProduct({id: "", photo: [], name: "", price: "", amount: 0});
          setProductPhoto("");
        }
    }


  return (
    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=>AddNewProduct(newProduct)}>Add</button>
  )
}

export default AddProductButton