import { configureStore } from "@reduxjs/toolkit";
import { reducer as authReducer } from "./Slices/authSlice";
import { reducer as restaurantReducer } from "./Slices/restaurantSlice";
import { reducer as cartReducer } from "./Slices/cartSlice";
import { reducer as favReducer } from "./Slices/favoriteSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    restaurant: restaurantReducer,
    cart: cartReducer,
    favorite: favReducer,
  },
});

export default store;
