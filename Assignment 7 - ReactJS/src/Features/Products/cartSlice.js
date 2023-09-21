import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItem: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, action.payload.item];
      state.totalItem = state.totalItem + 1;
      state.totalPrice = state.totalPrice + action.payload.item.price;
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((element) => {
        return parseInt(element.id) !== parseInt(action.payload.item.id);
      });
      state.totalItem = state.totalItem - 1;
      state.totalPrice = state.totalPrice - action.payload.item.price;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItem = 0;
      state.totalPrice = 0;
    },
    updateQuantity: (state, action) => {},
  },
});

export const { addItem, deleteItem, clearCart, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
