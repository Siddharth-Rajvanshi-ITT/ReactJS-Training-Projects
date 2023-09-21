import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteItem } from "../../Features/Products/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log("Cart Items", cartItems);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      {cartItems.items.map((element) => {
        const handleDeleteItem = () => {
          dispatch(deleteItem({ item: element }));
        };
        return (
          <div key={element.id}>
            <img src={element.image} className="product-image" alt="" />
            <h2>{element.title}</h2>
            <h2>{element.price} $</h2>
            <h3>Rating: {element.rating?.rate}/5</h3>
            <button onClick={handleDeleteItem}>Delete From Cart</button>
          </div>
        );
      })}
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
