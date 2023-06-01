import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { mdlProduct } from "../types/Type";

export const getProductsAsync: any = createAsyncThunk("products/getProductsAsync",async () => {
    const res = await axios.get("http://localhost:3004/products");
    return res.data;
  }
);

export const addProductsAsync = async(product: mdlProduct)=>{
  await axios.post(`http://localhost:3004/products`, product);
}

export const deleteProductsAsync = async(id: string)=>{
  await axios.delete(`http://localhost:3004/products/${id}`);
}