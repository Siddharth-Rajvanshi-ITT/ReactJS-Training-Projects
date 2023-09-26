import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { NavBar } from "./Nav";

test("Link availability", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );

  const home = screen.getByRole("link", {
    name: "Home",
  });

  const cart = screen.getByRole("link", {
    name: /cart/i,
  });

  expect(home).toBeInTheDocument();
  expect(cart).toBeInTheDocument();
});
