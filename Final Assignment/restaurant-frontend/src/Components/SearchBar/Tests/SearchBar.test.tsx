import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../SearchBar";

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
      "What are you looking for"
    );

    fireEvent.change(inputElement, { target: { value: "burger" } });

    expect(inputElement).toHaveValue("burger");
  });

  test("it filters results based on search term", () => {
    const searchItems = [
      {
        type: "restaurant",
        subtype: "veg",
        data: {
          id: 1,
          name: "Sample Restaurant",
          area: "Sample Area",
          totalRatingsString: "4.5",
          cloudinaryImageId: "sampleImageId",
          cuisines: ["Cuisine1", "Cuisine2"],
          address: "Sample Address",
          deliveryTime: 30,
          locality: "Sample Locality",
          veg: true,
          favorite: false,
          availability: {
            opened: true,
            nextOpenMessage: "Open Now",
            nextCloseMessage: "Closes in 2 hours",
          },
          avgRating: "4.5",
          totalRatings: 100,
          new: true,
        },
      },
    ];

    render(
      <SearchBar
        setSearchResults={setSearchResults}
        searchItems={searchItems}
      />
    );
    const inputElement = screen.getByPlaceholderText(
      "What are you looking for"
    );

    fireEvent.change(inputElement, { target: { value: "veg" } });

    expect(setSearchResults).toHaveBeenCalledWith([
      {
        type: "restaurant",
        subtype: "veg",
        data: {
          id: 1,
          name: "Veg Restaurant",
          // ...other properties
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
          name: "Sample Restaurant",
          area: "Sample Area",
          totalRatingsString: "4.5",
          cloudinaryImageId: "sampleImageId",
          cuisines: ["Cuisine1", "Cuisine2"],
          address: "Sample Address",
          deliveryTime: 30,
          locality: "Sample Locality",
          veg: true,
          favorite: false,
          availability: {
            opened: true,
            nextOpenMessage: "Open Now",
            nextCloseMessage: "Closes in 2 hours",
          },
          avgRating: "4.5",
          totalRatings: 100,
          new: true,
        },
      },
    ];

    render(
      <SearchBar
        setSearchResults={setSearchResults}
        searchItems={searchItems}
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
          name: "Non-Veg Restaurant",
          veg: false,
        },
      },
    ]);
  });
});
