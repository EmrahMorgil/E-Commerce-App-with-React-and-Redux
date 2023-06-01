import { createSlice } from "@reduxjs/toolkit";
import {mdlProduct, productInitialStateType} from "../../types/Type";
import { getProductsAsync } from "../../services/productService";


const initialState: productInitialStateType = {
  products: [],
  basket: [],
  basketAmount: 0,
  totalPrice: 0,
  status: "idle",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      state.basket.push(action.payload);
    },
    setBasket: (state, action) => {
      console.log(action);
      
      let newItem = state.basket.find((p: mdlProduct) => String(p.id) === String(action.payload.id));
      if (newItem) newItem.amount = action.payload!.amount;
    },
    deleteBasket: (state,action) => {
      state.basket = action.payload;
    },
    basketAmount: (state,action) => {
      if (action.payload === -1) {
        state.basketAmount++;
      } else if (action.payload === 0) {
        state.basketAmount--;
      }
      if (action.payload > 0) {
        state.basketAmount = action.payload;
      }
    },
    clearBasketItems: (state) => {
      state.basket = [];
      state.basketAmount = 0;
    },
    setTotalPrice: (state,action) => {
      state.totalPrice = action.payload;
    },
    setProducts: (state, action)=>{
      state.products = action.payload;
    },  
    addProducts: (state, action)=>{
      state.products.push(action.payload);
    },
    deleteProducts: (state, action)=>{
      let newProducts = state.products.filter((p: mdlProduct)=>{
        if(p.id!==action.payload.id)
        {
          return p;
        }
      });
      state.products = newProducts;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getProductsAsync.pending,
      (state: productInitialStateType) => {
        state.status = "loading";
      }
    );
    builder.addCase(
      getProductsAsync.fulfilled,
      (state, action) => {
        state.products = action.payload;
        state.status = "success";
      }
    );
  },
});

export default productsSlice.reducer;
export const {
  addBasket,
  setBasket,
  deleteBasket,
  basketAmount,
  clearBasketItems,
  setTotalPrice,
  setProducts,
  addProducts,
  deleteProducts,
} = productsSlice.actions;
