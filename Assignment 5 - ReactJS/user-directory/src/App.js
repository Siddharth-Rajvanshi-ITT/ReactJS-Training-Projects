import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import UserDetails from "./Components/Pages/UserDetails";
import Header from "./Components/Sections/header";
import { ThemeProvider } from "./Components/Context/ThemeContext";
import { SelectedUserProvider } from "./Components/Context/UserContext";

function App() {
  return (
    <ThemeProvider>
      <SelectedUserProvider>
        <div className="App">
          <Router>
            <Header />
            <Routes>
              <Route></Route>
              <Route path="/" element={<Home />} />
              <Route path="userDetails" element={<UserDetails />} />
            </Routes>
          </Router>
        </div>
      </SelectedUserProvider>
    </ThemeProvider>
  );
}

export default App;
