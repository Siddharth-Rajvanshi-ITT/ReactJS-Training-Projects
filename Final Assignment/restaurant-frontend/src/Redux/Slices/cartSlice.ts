import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [] as never[],
  isEmpty: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const newCart = state.cartItems.includes(action.payload as never)
        ? state.cartItems
        : [...state.cartItems, action.payload];
      state.cartItems = newCart as never[];
      state.isEmpty = false;
    },
    emptyCart: (state) => {
      state.cartItems = [];
      state.isEmpty = true;
    },
  },
});

export const { addToCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
