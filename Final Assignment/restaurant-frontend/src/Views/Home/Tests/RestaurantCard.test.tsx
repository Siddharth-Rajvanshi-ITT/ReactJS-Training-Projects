import React from "react";
import { render, screen } from "@testing-library/react";
import RestaurantCard from "../Components/RestaurantCard/RestaurantCard";

const sampleRestaurantData = {
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
};

describe("RestaurantCard", () => {
  it("renders the RestaurantCard component with sample data", () => {
    render(<RestaurantCard restaurantData={sampleRestaurantData} />);

    const restaurantName = screen.getByText("Sample Restaurant");
    const area = screen.getByText("Sample Area");
    const vegLabel = screen.getByText("Veg");
    const newLabel = screen.getByText("New");
    const availability = screen.getByText("Available");
    const rating = screen.getByText("4.5 ⭐");

    expect(restaurantName).toBeInTheDocument();
    expect(area).toBeInTheDocument();
    expect(vegLabel).toBeInTheDocument();
    expect(newLabel).toBeInTheDocument();
    expect(availability).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
  });
});
