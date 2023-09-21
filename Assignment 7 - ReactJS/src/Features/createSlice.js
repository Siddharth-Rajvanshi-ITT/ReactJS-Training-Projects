import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {
    getMovies: (state, action) => {
      state.data = action.payload;
    },
    deleteMovie: (state, action) => {
      state.data = state.data.map((element, key) => {
        return element.id !== action.payload && element;
      });
    },
  },
});

export const { getMovies, deleteMovie } = productSlice.actions;
export default productSlice.reducer;
