import {  createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems:[]
    },

    reducers: {
        addItem: (state, action) => {
            state.cartItems.push(action.payload);
        },
        removeItem:(state) => {
            state.cartItems = [];
        }
    }
});

export const { addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;
