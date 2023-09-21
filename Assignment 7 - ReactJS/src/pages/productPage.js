import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();

  const productList = useSelector((state) => state.product.data);

  const product = useMemo(() => {
    return productList.filter((element, key) => {
      return parseInt(id) === parseInt(element.id);
    });
  }, [id, productList]);

  return (
    <div>
      {product.map((element) => {
        return (
          <div key={element.id}>
            <img src={element.image} className="product-image" alt="" />
            <h2>{element.title}</h2>
            <p>{element.description}</p>
            <h2>{element.price}</h2>
            <h3>Rating: {element.rating?.rate}/5</h3>
            <h4>{element.rating?.count} Reviews</h4>
          </div>
        );
      })}
    </div>
  );
};

export default ProductPage;
