import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { mdlUser } from "../types/Type";

export const getUsersAsync: any = createAsyncThunk("users/getUsersAsync",async () => {
    const res = await axios.get("http://localhost:3004/users");
    return res.data;
  }
);

export const addUsersAsync = async(user: mdlUser)=>{
  await axios.post(`http://localhost:3004/users`, user);
}
