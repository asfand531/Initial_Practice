import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import KameezShalwar from "./components/KameezShalwar";
import Kurta from "./components/Kurta";
import Unstitched from "./components/Unstitched";
import Footwear from "./components/Footwear";
import Caps from "./components/Caps";
import IndividualProduct from "./components/IndividualProduct";
import CartDetails from "./components/CartDetails";
import Checkout from "./components/Checkout";

function App() {
  const [cartItems, setCartItems] = useState([]);
  // const [formData, setFormData] = useState(null);

  // const handleFormSubmit = (data) => {
  //   setFormData(data);
  // };

  return (
    <>
      <nav>
        <Navbar cartCount={cartItems.length} />
      </nav>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/kameezshalwar" element={<KameezShalwar />} />
        <Route
          path="/product/:id"
          element={
            <IndividualProduct
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
        <Route path="/kurta" element={<Kurta />} />
        <Route path="/unstitched" element={<Unstitched />} />
        <Route path="/footwear" element={<Footwear />} />
        <Route path="/caps" element={<Caps />} />
        <Route path="*" element={<Home />} />
        <Route path="/cart" element={<CartDetails cartItems={cartItems} />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
      </Routes>
    </>
  );
}

export default App;
