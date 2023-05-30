import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  homeItem,
  productInitialStateType,
  productsAddBasketActionType,
  productsDeleteBasketActionType,
  productsBasketAmountType,
  productsSetTotalPrice,
  extraReducersFullFilledType,
  productsSetBasketActionType
} from "../../types/Type";

export const getProductsAsync: any = createAsyncThunk("products/getProductsAsync",async () => {
    const res = await axios.get("http://localhost:3004/products");
    return res.data;
  }
);

const initialState: productInitialStateType = {
  items: [],
  basket: [],
  basketAmount: 0,
  totalPrice: 0,
  status: "idle",
};



export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addBasket: (state: productInitialStateType, action: productsAddBasketActionType) => {
      state.basket.push(action.payload);
    },
    setBasket: (state: productInitialStateType, action: productsSetBasketActionType) => {
      console.log(action);
      
      let newItem = state.basket.find((p: homeItem) => p.id === action.payload?.id);
      if (newItem) newItem.amount = action.payload!.amount;
    },
    deleteBasket: (state: productInitialStateType,action: productsDeleteBasketActionType) => {
      state.basket = action.payload;
    },
    basketAmount: (state: productInitialStateType,action: productsBasketAmountType) => {
      if (action.payload === -1) {
        state.basketAmount++;
      } else if (action.payload === 0) {
        state.basketAmount--;
      }
      if (action.payload > 0) {
        state.basketAmount = action.payload;
      }
    },
    clearBasketItems: (state: productInitialStateType) => {
      state.basket = [];
      state.basketAmount = 0;
    },
    setTotalPrice: (state: productInitialStateType,action: productsSetTotalPrice) => {
      state.totalPrice = action.payload;
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
      (state: productInitialStateType, action: extraReducersFullFilledType) => {
        state.items = action.payload;
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
} = productsSlice.actions;
