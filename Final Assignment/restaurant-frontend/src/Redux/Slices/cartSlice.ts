import { createSlice } from "@reduxjs/toolkit";
import { cartType } from "../Types/cartType";
import { item } from "../../Views/RestaurantPage/Types/item";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState: cartType = {
  cartItems: [],
  isEmpty: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemInCart = state.cartItems.some(
        (item: { id: number }) => item.id === action.payload.id
      );

      if (!isItemInCart) {
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, counter: 1 } as never,
        ];
        state.isEmpty = false;
      } else {
        toast.info("Item already added", {
          autoClose: 2000,
        });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload;
      });

      state.isEmpty = state.cartItems.length ? false : true;
    },
    emptyCart: (state) => {
      state.cartItems = [];
      state.isEmpty = true;
    },
    increaseCount: (state, action) => {
      state.cartItems = state.cartItems.map((item: item) => {
        if (item.id === action.payload) {
          return { ...item, counter: item.counter + 1 };
        }
        return item;
      });
    },
    decreaseCount: (state, action) => {
      state.cartItems = state.cartItems.map((item: item) => {
        if (item.id === action.payload && item.counter > 1) {
          return { ...item, counter: item.counter - 1 };
        }
        return item;
      });
    },
  },
});

export const { actions, reducer } = cartSlice;
