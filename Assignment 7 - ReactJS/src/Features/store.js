import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./createSlice";
import cartReducer from "./Products/cartSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
