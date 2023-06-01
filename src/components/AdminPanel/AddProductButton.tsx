import React from 'react'
import { mdlProduct } from '../../types/Type'
import { addProducts } from '../../redux/products/productsSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

export interface IAddProductButton{
    newProduct: mdlProduct;
}

const AddProductButton: React.FC<IAddProductButton> = ({newProduct}) => {
    const dispatch = useDispatch();

    const AddNewProduct = (newProduct: mdlProduct)=>{
        newProduct.id = nanoid();
        if(newProduct.name!=="" && newProduct.photo.length!==0 && newProduct.price!=="")
        dispatch(addProducts(newProduct));
    }


  return (
    <button type="button" className="btn btn-primary" onClick={()=>AddNewProduct(newProduct)}>Add</button>
  )
}

export default AddProductButton