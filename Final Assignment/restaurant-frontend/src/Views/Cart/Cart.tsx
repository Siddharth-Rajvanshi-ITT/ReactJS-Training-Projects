import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../Redux/Selectors/cartSelectors";
import { emptyCart } from "../../Redux/Slices/cartSlice";

const Cart = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const hanldeEmptyCart = () => {
    dispatch(emptyCart());
  };

  return (
    <div>
      {cart.isEmpty ? "Cart Empty" : "Cart is not empty"}
      <br />
      <button onClick={hanldeEmptyCart}>Empty Cart</button>
    </div>
  );
};

export default Cart;
