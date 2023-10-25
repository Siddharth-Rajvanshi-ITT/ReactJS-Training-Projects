import React, { useEffect } from "react";
import "./App.css";
import Login from "./Views/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Views/Home/Home";
import Restaurant from "./Views/RestaurantPage/Restaurant";
import Cart from "./Views/Cart/Cart";
import PageNotFound from "./Views/PageNotFound/PageNotFound";
import { fetchUsers } from "./Http-Services/getUsersService";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./Redux/Slices/authSlice";
import { selectAuth } from "./Redux/Selectors/authSelector";
import Checkout from "./Views/Checkout/Checkout";
import AboutUs from "./Views/AboutUs/AboutUs";

type user = {
  username: string;
};

function App() {
  const dispatch = useDispatch();
  const { rememberUser } = useSelector(selectAuth);

  useEffect(() => {
    const checkUserLogin = async () => {
      const users = await fetchUsers();

      const isUser = users.data.filter((item: user) => {
        return item.username === localStorage.getItem("username");
      });

      isUser[0] && dispatch(actions.login(isUser[0]));
    };

    rememberUser && checkUserLogin();
  }, [dispatch, rememberUser]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
