import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {
    getProducts: (state, action) => {
      state.data = action.payload;
    },
    deleteProduct: (state, action) => {
      state.data = state.data.map((element, key) => {
        return element.id !== action.payload && element;
      });
    },
  },
});

export const { getProducts, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
