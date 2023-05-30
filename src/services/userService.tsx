import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersAsync: any = createAsyncThunk(
  "users/getUsersAsync",
  async () => {
    const res = await axios.get("http://localhost:3004/users");
    return res.data;
  }
);
