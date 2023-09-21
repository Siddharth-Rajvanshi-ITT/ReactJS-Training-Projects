import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Products/productsSlice";
import cartReducer from "./Products/cartSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
