import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Shoes from "./components/shoes/Shoes";
import Navbar from "./components/navbar/Navbar";
import CartDetails from "./components/cart/CartDetails";
import Clothes from "./components/clothes/Clothes";
import "./App.css";

function App() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  // const [cartItems, setCartItems] = useState({});
  let [search, setSearch] = useState(); // Used for search input

  return (
    <>
      <Router>
        <Navbar
          setSelectedBrand={setSelectedBrand}
          cartNumber={cartCount}
          search={search}
          setSearch={setSearch}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Shoes
                  selectedBrand={selectedBrand}
                  setCartCount={setCartCount}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  search={search}
                  setSearch={setSearch}
                />
                <Clothes
                  selectedBrand={selectedBrand}
                  setCartCount={setCartCount}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  search={search}
                  setSearch={setSearch}
                />
              </>
            }
          />
          <Route
            path="/clothes"
            element={
              <Clothes
                selectedBrand={selectedBrand}
                setCartCount={setCartCount}
                cartItems={cartItems}
                setCartItems={setCartItems}
                search={search}
                setSearch={setSearch}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartDetails
                cartItems={cartItems}
                setCartItems={setCartItems}
                search={search}
                setSearch={setSearch}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
