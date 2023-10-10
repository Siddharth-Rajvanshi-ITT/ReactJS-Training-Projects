import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice";
import restaurantReducer from "./Slices/restaurantSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    restaurant: restaurantReducer,
  },
});

export default store;
