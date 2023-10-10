// restaurantSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurants: [],
  loading: false,
  error: null,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: initialState,
  reducers: {
    fetchRestaurantsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchRestaurantsSuccess: (state, action) => {
      state.restaurants = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchRestaurantsFailure: (state, action) => {
      state.restaurants = [];
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchRestaurantsStart,
  fetchRestaurantsSuccess,
  fetchRestaurantsFailure,
} = restaurantSlice.actions;

export default restaurantSlice.reducer;
