import { createSlice } from "@reduxjs/toolkit";
import { cartType } from "../Types/cartType";

const initialState: cartType = {
  cartItems: [],
  isEmpty: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemInCart = state.cartItems.some(
        (item: { id: number }) => item.id === action.payload.id
      );

      if (!isItemInCart) {
        state.cartItems = [...state.cartItems, action.payload as never];
        state.isEmpty = false;
      }
    },
    emptyCart: (state) => {
      state.cartItems = [];
      state.isEmpty = true;
    },
  },
});

export const { actions, reducer } = cartSlice;
