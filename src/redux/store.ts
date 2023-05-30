import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./products/productsSlice";
import usersSlice from "./users/usersSlice";
import themeSlice from "./theme/themeSlice";


export const store = configureStore({
    reducer: {
        products: productsSlice,
        users: usersSlice,
        theme: themeSlice,
    },
});

//-----------------------------------------
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch