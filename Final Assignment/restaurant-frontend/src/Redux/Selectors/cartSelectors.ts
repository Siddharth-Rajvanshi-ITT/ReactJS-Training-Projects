const selectCart = (state: {
  cart: {
    cartItems: number[];
    isEmpty: boolean;
  };
}) => state.cart;

export { selectCart };
