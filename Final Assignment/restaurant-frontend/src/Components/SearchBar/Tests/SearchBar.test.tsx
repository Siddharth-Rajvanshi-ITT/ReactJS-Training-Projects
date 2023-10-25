import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../SearchBar";
import { restaurant } from "../../../Views/Home/Types/restaurantTypes";
import { MenuItems } from "../../../Views/RestaurantPage/Types/menuTypes";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("SearchBar Component", () => {
  const setSearchResults = jest.fn();

  test("it renders the input and checkboxes", () => {
    render(<SearchBar setSearchResults={setSearchResults} searchItems={[]} />);
    const inputElement = screen.getByPlaceholderText(
      "What are you looking for?"
    );
    const vegCheckbox = screen.getByText("Veg");
    const nonVegCheckbox = screen.getByText("Non-Veg");

    expect(inputElement).toBeInTheDocument();
    expect(vegCheckbox).toBeInTheDocument();
    expect(nonVegCheckbox).toBeInTheDocument();
  });

  test("it updates search term on input change", () => {
    render(<SearchBar setSearchResults={setSearchResults} searchItems={[]} />);
    const inputElement = screen.getByPlaceholderText(
      "What are you looking for?"
    );

    fireEvent.change(inputElement, { target: { value: "burger" } });

    expect(inputElement).toHaveValue("burger");
  });

  test("it filters results based on restaurant search term", () => {
    const searchItems = [
      {
        type: "restaurant",
        subtype: "veg",
        data: {
          id: 1,
          name: "Veg Restaurant",
          veg: true,
        },
      },
    ];

    render(
      <SearchBar
        setSearchResults={setSearchResults}
        searchItems={searchItems as restaurant[]}
      />
    );
    const inputElement = screen.getByPlaceholderText(
      "What are you looking for?"
    );

    fireEvent.change(inputElement, { target: { value: "veg" } });

    expect(setSearchResults).toHaveBeenCalledWith([
      {
        type: "restaurant",
        subtype: "veg",
        data: {
          id: 1,
          name: "Veg Restaurant",
          veg: true,
        },
      },
    ]);
  });

  test("it filters results based on menu item search term", () => {
    const searchItems = [
      {
        card: {
          info: {
            id: 1,
            name: "Sample Dish",
            category: "Main Course",
            description: "A delicious sample dish description.",
            imageId: "sampleImageId",
            isVeg: 1,
            price: 10.99,
            addons: {
              choices: [
                {
                  id: 101,
                  name: "Addon 1",
                  price: 2.99,
                  isVeg: 1,
                },
                {
                  id: 102,
                  name: "Addon 2",
                  price: 1.99,
                  isVeg: 1,
                },
              ],
            },
            isBestseller: true,
            ratings: {
              aggregatedRating: {
                rating: "4.5",
                ratingCount: "100",
                ratingCountV2: "95",
              },
            },
          },
        },
      },
    ];

    render(
      <SearchBar
        setSearchResults={setSearchResults}
        searchItems={searchItems as MenuItems[]}
      />
    );
    const inputElement = screen.getByPlaceholderText(
      "What are you looking for?"
    );

    fireEvent.change(inputElement, { target: { value: "veg" } });

    expect(setSearchResults).toHaveBeenCalledWith([
      {
        card: {
          info: {
            id: 1,
            name: "Sample Dish",
            category: "Main Course",
            description: "A delicious sample dish description.",
            imageId: "sampleImageId",
            isVeg: 1,
            price: 10.99,
            addons: {
              choices: [
                {
                  id: 101,
                  name: "Addon 1",
                  price: 2.99,
                  isVeg: 1,
                },
                {
                  id: 102,
                  name: "Addon 2",
                  price: 1.99,
                  isVeg: 1,
                },
              ],
            },
            isBestseller: true,
            ratings: {
              aggregatedRating: {
                rating: "4.5",
                ratingCount: "100",
                ratingCountV2: "95",
              },
            },
          },
        },
      },
    ]);
  });

  test("it filters results based on checkbox state", () => {
    const searchItems = [
      {
        type: "restaurant",
        subtype: "veg",
        data: {
          id: 1,
          name: "Veg Restaurant",
          veg: true,
        },
      },
      {
        type: "restaurant",
        subtype: "veg",
        data: {
          id: 2,
          name: "Non-veg Restaurant",
          veg: false,
        },
      },
    ];

    render(
      <SearchBar
        setSearchResults={setSearchResults}
        searchItems={searchItems as restaurant[]}
      />
    );
    const vegCheckbox = screen.getByText("Veg");
    const nonVegCheckbox = screen.getByText("Non-Veg");

    fireEvent.click(vegCheckbox);

    expect(setSearchResults).toHaveBeenCalledWith([
      {
        type: "restaurant",
        subtype: "veg",
        data: {
          id: 1,
          name: "Veg Restaurant",
          veg: true,
        },
      },
      {
        type: "restaurant",
        subtype: "veg",
        data: {
          id: 2,
          name: "Non-veg Restaurant",
          veg: false,
        },
      },
    ]);

    fireEvent.click(nonVegCheckbox);

    expect(setSearchResults).toHaveBeenCalledWith([
      {
        type: "restaurant",
        subtype: "veg",
        data: {
          id: 1,
          name: "Veg Restaurant",
          veg: true,
        },
      },
      {
        type: "restaurant",
        subtype: "veg",
        data: {
          id: 2,
          name: "Non-veg Restaurant",
          veg: false,
        },
      },
    ]);
  });
});
