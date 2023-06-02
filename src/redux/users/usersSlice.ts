import { createSlice } from "@reduxjs/toolkit";
import { usersInitialStateType } from "../../types/Type";
import { getUsersAsync } from "../../services/userService";

const initialState: usersInitialStateType = {
  users: [],
  userLoggedIn: JSON.parse(String(localStorage.getItem("userLoggedIn"))) !== true && false ? false : JSON.parse(String(localStorage.getItem("userLoggedIn"))),
  adminLoggedIn: JSON.parse(String(localStorage.getItem("adminLoggedIn"))) !== true && false ? false : JSON.parse(String(localStorage.getItem("adminLoggedIn"))),
  registerControl: false,
  activeUser: JSON.parse(String(localStorage.getItem("userLoggedIn"))) === true || JSON.parse(String(localStorage.getItem("adminLoggedIn"))) === true ? JSON.parse(String(localStorage.getItem("activeUser"))) : {},
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
    setActiveUser: (state, action)=>{
      state.activeUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersAsync.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export default usersSlice.reducer;
export const { addUsers,setUserLoggedIn, setRegisterControl, setActiveUser, setAdminLoggedIn } = usersSlice.actions;
