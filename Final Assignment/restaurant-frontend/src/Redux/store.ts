import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice";
import restaurantReducer from "./Slices/restaurantSlice";
import cartReducer from "./Slices/cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    restaurant: restaurantReducer,
    cart: cartReducer,
  },
});

export default store;
