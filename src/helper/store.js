import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer:{
        cart: cartSlice // cart is from name field from cartSlice.js i.e line number 4
    }, // add your reducer here.
});

export default store;
