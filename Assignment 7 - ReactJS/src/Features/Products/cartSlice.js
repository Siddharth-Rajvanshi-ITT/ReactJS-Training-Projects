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
      const availableItem = state.items.filter((element) => {
        return parseInt(element.id) === parseInt(action.payload.item.id);
      });

      state.items = !availableItem.length
        ? [...state.items, action.payload.item]
        : [...state.items];
      state.totalItem = !availableItem.length
        ? state.totalItem + 1
        : state.totalItem;
      state.totalPrice = !availableItem.length
        ? state.totalPrice + action.payload.item.price
        : state.totalPrice;
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
    updateQuantity: (state, action) => {
      state.items = state.items.map((element) => {
        console.log(
          action.payload.value,
          action.payload.item.price,
          action.payload.item.quantity
        );
        return parseInt(element.id) === parseInt(action.payload.item.id)
          ? {
              ...element,
              quantity: Math.max(1, element.quantity + action.payload.value),
            }
          : element;
      });
    },
  },
});

export const { addItem, deleteItem, clearCart, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
