import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./Components/Nav";
import { Home } from "./Components/Home";
import { useDispatch } from "react-redux";
import { getProducts } from "./Features/Products/productsSlice";
import { useEffect } from "react";
import axios from "axios";
import ProductPage from "./Components/pages/productPage";
import Cart from "./Components/pages/Cart";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const movies = async () => {
      const res = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
          console.log("Error Response: ", err);
        });
      dispatch(getProducts(res.data));
    };
    movies();
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prod/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
