import React from "react";
import "./App.css";
import Login from "./Views/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Views/Home/Home";
import Restaurant from "./Views/RestaurantPage/Restaurant";
import Cart from "./Views/Cart/Cart";
import PageNotFound from "./Views/404/404";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
