import React from "react";
import "./App.css";
import Login from "./Pages/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Restaurant from "./Pages/RestaurantPage/Restaurant";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/restaurant" element={<Restaurant />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
