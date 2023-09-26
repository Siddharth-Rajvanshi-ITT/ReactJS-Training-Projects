import React from "react";
import {
  clearCart,
  deleteItem,
  updateQuantity,
} from "../Features/Products/cartSlice";
import { useAppDispatch, useAppSelector } from "../Features/React-hooks";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div className="cart-container">
        {cartItems.items.map((element) => {
          const handleDeleteItem = () => {
            dispatch(deleteItem({ item: element }));
          };

          const handleQuantity = (value) => {
            dispatch(updateQuantity({ item: element, value: value }));
          };
          return (
            <div key={element.id}>
              <img src={element.image} className="product-image" alt="" />
              <h2>{element.title}</h2>
              <h2>{element.price} $</h2>
              <h2>Total Price {element.price * element.quantity} $</h2>
              <h3>Rating: {element.rating?.rate}/5</h3>
              <h3>quantity: {element.quantity}</h3>
              <button onClick={() => handleQuantity(-1)}>-</button>
              <button onClick={handleDeleteItem}>Delete From Cart</button>
              <button onClick={() => handleQuantity(1)}>+</button>
            </div>
          );
        })}
      </div>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
