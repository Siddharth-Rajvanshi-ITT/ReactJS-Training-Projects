import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Product from "./Product";
import userEvent from "@testing-library/user-event";
import { useAppDispatch } from "../Features/React-hooks";
import { useNavigate } from "react-router-dom";

jest.mock("../Features/React-hooks");
jest.mock("react-router-dom");

describe("Product", () => {
  const dispatch = jest.fn();
  const navigate = jest.fn();

  const product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  };

  beforeEach(() => {
    useAppDispatch.mockImplementation(() => dispatch);
    useNavigate.mockImplementation(() => navigate);
  });

  test("should display product details", () => {
    render(<Product product={product} />);

    const image = screen.getByRole("img");

    const title = screen.getByRole("heading", {
      name: /fjallraven - foldsack no\. 1 backpack, fits 15 laptops/i,
    });

    const description = screen.getByText(
      /your perfect pack for everyday use and walks in the forest\. stash your laptop \(up to 15 inches\) in the padded sleeve, your everyday/i
    );

    const price = screen.getByRole("heading", {
      name: /109\.95/i,
    });

    const rating = screen.getByRole("heading", {
      name: /rating: 3\.9\/5/i,
    });

    const reviews = screen.getByRole("heading", {
      name: /120 reviews/i,
    });

    const deleteBtn = screen.getByRole("button", {
      name: /Delete Product/i,
    });

    const viewBtn = screen.getByRole("button", {
      name: /view product/i,
    });

    const addToCartBtn = screen.getByRole("button", {
      name: /add to cart/i,
    });

    const deleteFromCartBtn = screen.getByRole("button", {
      name: /delete from cart/i,
    });

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
    expect(reviews).toBeInTheDocument();
    expect(deleteBtn).toBeInTheDocument();
    expect(viewBtn).toBeInTheDocument();
    expect(addToCartBtn).toBeInTheDocument();
    expect(deleteFromCartBtn).toBeInTheDocument();
  });

  test("Should delete product", () => {
    render(<Product product={product} />);

    const deleteBtn = screen.getByRole("button", {
      name: /Delete Product/i,
    });

    userEvent.click(deleteBtn);

    expect(useAppDispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith({
      payload: product.id,
      type: "products/deleteProduct",
    });
  });

  test("Should view product", () => {
    render(<Product product={product} />);

    const viewBtn = screen.getByRole("button", {
      name: /view product/i,
    });

    userEvent.click(viewBtn);

    expect(useNavigate).toHaveBeenCalled();
    expect(navigate).toHaveBeenCalledWith(`/prod/${product.id}`);
  });

  test("Should add to cart", () => {
    render(<Product product={product} />);

    const addToCartBtn = screen.getByRole("button", {
      name: /Add to cart/i,
    });

    userEvent.click(addToCartBtn);

    expect(useAppDispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith({
      type: "cart/addItem",
      payload: {
        item: {
          ...product,
          quantity: 1,
        },
      },
    });
  });

  test("should delete from cart", () => {
    render(<Product product={product} />);

    const deleteFromCartBtn = screen.getByRole("button", {
      name: /delete from cart/i,
    });

    userEvent.click(deleteFromCartBtn);

    expect(useAppDispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith({
      type: "cart/deleteItem",
      payload: {
        item: { ...product },
      },
    });
  });
});
