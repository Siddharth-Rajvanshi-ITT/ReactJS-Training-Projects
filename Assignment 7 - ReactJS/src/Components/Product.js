import React from "react";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../Features/createSlice";
import { useNavigate } from "react-router-dom";
import { addItem, deleteItem } from "../Features/Products/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteMovie(product.id));
  };

  const handleAddToCart = () => {
    dispatch(addItem({ item: product }));
  };

  const handleDeleteItem = () => {
    dispatch(deleteItem({ item: product }));
  };

  return (
    <>
      {product.id && (
        <div className="card">
          <div>
            <img src={product.image} className="product-image" alt="" />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h2>{product.price}</h2>
            <h3>Rating: {product.rating?.rate}/5</h3>
            <h4>{product.rating?.count} Reviews</h4>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
            <button
              onClick={() => {
                navigate(`/prod/${product.id}`);
              }}
            >
              View Product
            </button>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={handleDeleteItem}>Delete From Cart</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
