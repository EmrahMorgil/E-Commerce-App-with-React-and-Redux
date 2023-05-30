import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsAsync: any = createAsyncThunk("products/getProductsAsync",async () => {
    const res = await axios.get("http://localhost:3004/products");
    return res.data;
  }
);