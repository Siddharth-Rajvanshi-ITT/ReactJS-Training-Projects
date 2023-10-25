import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import { actions } from "../../../Redux/Slices/authSlice";
import {
  useDispatch as useDispatchOriginal,
  useSelector as useSelectorOriginal,
} from "react-redux";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const mockStore = configureStore([]);
const store = mockStore({
  auth: {
    user: { username: "exampleUser" },
    isAuthenticated: true,
  },
});

describe("Navbar Component", () => {
  const useSelector = useSelectorOriginal as jest.Mock;
  const useDispatch = useDispatchOriginal as jest.Mock;

  test("it renders nav links", () => {
    useSelector.mockReturnValue({
      user: { username: "exampleUser" },
      isAuthenticated: true,
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    const home = screen.getByRole("link", {
      name: /home/i,
    });

    const about = screen.getByRole("link", {
      name: /about us/i,
    });

    const cart = screen.getByRole("link", {
      name: /cart/i,
    });

    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(cart).toBeInTheDocument();
  });

  test("it checks navigations", () => {
    useSelector.mockReturnValue({
      user: { username: "exampleUser" },
      isAuthenticated: true,
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    const home = screen.getByRole("link", {
      name: /home/i,
    });
    fireEvent.click(home);
    expect(window.location.pathname).toBe("/");

    const about = screen.getByRole("link", {
      name: /about us/i,
    });
    fireEvent.click(about);
    expect(window.location.pathname).toBe("/about");

    const cart = screen.getByRole("link", {
      name: /cart/i,
    });
    fireEvent.click(cart);
    expect(window.location.pathname).toBe("/cart");
  });

  test("it renders with the user's username when authenticated", () => {
    useSelector.mockReturnValue({
      user: { username: "exampleUser" },
      isAuthenticated: true,
    });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    const usernameLink = screen.getByText("exampleUser");
    expect(usernameLink).toBeInTheDocument();
  });

  test("it renders login link when not authenticated", () => {
    useSelector.mockReturnValue({ user: null, isAuthenticated: false });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    const loginLink = screen.getByText("Login");
    expect(loginLink).toBeInTheDocument();
  });

  test("it renders logout button", () => {
    useSelector.mockReturnValue({
      user: { username: "exampleUser" },
      isAuthenticated: true,
    });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    const logoutButton = screen.getByText("Logout");
    expect(logoutButton).toBeInTheDocument();
  });

  test("it calls handleLogout when the logout button is clicked", () => {
    useSelector.mockReturnValue({
      user: { username: "exampleUser" },
      isAuthenticated: true,
    });
    useDispatch.mockReturnValue(jest.fn());
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    const logoutButton = screen.getByText("Logout");
    fireEvent.click(logoutButton);

    expect(useDispatch()).toHaveBeenCalledWith(actions.logout());
  });
});
