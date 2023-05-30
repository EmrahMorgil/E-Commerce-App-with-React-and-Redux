import { createSlice } from "@reduxjs/toolkit";
import { themeInitialStateType, setThemeActionType } from "../../types/Type";


const initialState: themeInitialStateType = {
  theme: false
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state: themeInitialStateType, action: setThemeActionType)=>{
      state.theme = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions;


