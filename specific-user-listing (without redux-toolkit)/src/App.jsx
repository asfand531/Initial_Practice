import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import UserProducts from "./UserProducts";
import CartDetails from "./CartDetails";
import "./App.css";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [product, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [openResponsive, setOpenResponsive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addCart = (productItem) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.name === productItem.name
      );

      if (existingIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          count: updatedItems[existingIndex].count + 1,
        };
        return updatedItems;
      } else {
        return [...prevItems, { ...productItem, count: 1 }];
      }
    });
  };

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const addProduct = (newProduct, userId) => {
    setProduct((prevProduct) => [...prevProduct, { ...newProduct, userId }]);
  };

  return (
    <>
      <div>
        <Navbar setIsModalOpen={setIsModalOpen} />
      </div>
      <div className="parent">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                users={users}
                onAddUser={addUser}
                openAddUserModal={isModalOpen}
                setOpenAddUserModal={setIsModalOpen}
              />
            }
          />
          <Route path="/user-list" element={<UserList data={users} />} />
          <Route
            path="/user/:id/products"
            element={
              <UserProducts
                data={product}
                addCart={addCart}
                cartItems={cartItems}
                openResponsive={openResponsive}
                setOpenResponsive={setOpenResponsive}
                onAddProduct={addProduct}
              />
            }
          />
          <Route path="/cart" element={<CartDetails cartItems={cartItems} />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
