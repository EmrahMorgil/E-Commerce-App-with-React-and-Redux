import { createSlice } from "@reduxjs/toolkit";
import { usersInitialStateType } from "../../types/Type";
import { getUsersAsync } from "../../services/userService";

const initialState: usersInitialStateType = {
  users: [],
  userLoggedIn: false,
  adminLoggedIn: false,
  registerControl: false,
  welcomeUser: "",
}

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state, action)=>{
      if(state.users)
      state.users.push(action.payload);
    },
    setUserLoggedIn: (state, action) => {
      state.userLoggedIn = action.payload;
    },
    setAdminLoggedIn: (state, action)=>{
      state.adminLoggedIn = action.payload;
    },
    setRegisterControl: (state, action)=>{
      state.registerControl = action.payload;
    },
    setWelcomeUser: (state, action)=>{
      state.welcomeUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersAsync.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export default usersSlice.reducer;
export const { addUsers,setUserLoggedIn, setRegisterControl, setWelcomeUser, setAdminLoggedIn } = usersSlice.actions;
