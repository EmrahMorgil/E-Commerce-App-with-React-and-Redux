import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addUsersActionType, setRegisterControlActionType, 
  setUserLoggedInActionType, usersInitialStateType, 
  setWelcomeUserActionType, usersExtraReducerFullFilledType } from "../../types/Type";

export const getUsersAsync: any = createAsyncThunk(
  "users/getUsersAsync",
  async () => {
    const res = await axios.get("http://localhost:3004/users");
    return res.data;
  }
);


const initialState: usersInitialStateType = {
  users: [],
  userLoggedIn: false,
  registerControl: false,
  welcomeUser: "",
}

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state: usersInitialStateType, action: addUsersActionType)=>{
      if(state.users)
      state.users.push(action.payload);
    },
    setUserLoggedIn: (state: usersInitialStateType, action: setUserLoggedInActionType) => {
      state.userLoggedIn = action.payload;
    },
    setRegisterControl: (state: usersInitialStateType, action: setRegisterControlActionType)=>{
      state.registerControl = action.payload;
    },
    setWelcomeUser: (state: usersInitialStateType, action: setWelcomeUserActionType)=>{
      state.welcomeUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersAsync.fulfilled, (state: usersInitialStateType, action: usersExtraReducerFullFilledType) => {
      console.log(action);
      state.users = action.payload;
    });
  },
});

export default usersSlice.reducer;
export const { addUsers,setUserLoggedIn, setRegisterControl, setWelcomeUser } = usersSlice.actions;
