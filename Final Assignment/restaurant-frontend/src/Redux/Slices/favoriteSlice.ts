import { createSlice } from "@reduxjs/toolkit";
import { restaurant } from "../../Views/Home/Types/restaurantTypes";

type favRestaurants = {
  favRestaurants: restaurant[];
};

const initialState: favRestaurants = {
  favRestaurants: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const isFavorite = state.favRestaurants.some(
        (item) => item.data.id === action.payload.data.id
      );
      if (!isFavorite) {
        state.favRestaurants = [
          ...state.favRestaurants,
          action.payload as never,
        ];
      }
    },
    removeFromFavorite: (state, action) => {
      state.favRestaurants = state.favRestaurants.filter((restaurant) => {
        return restaurant.data.id !== action.payload.data.id;
      });
    },
    emptyFavoriteList: (state) => {},
  },
});

export const { actions, reducer } = favoriteSlice;
