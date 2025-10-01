// import { ShoppingCartOutlined } from "@ant-design/icons";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar({ setSelectedBrand, cartNumber }) {
//   return (
//     <div className="container">
//       <ul>
//         <div className="nav-left">
//           <li onClick={() => setSelectedBrand(null)}>All</li>
//           <li onClick={() => setSelectedBrand("Nike")}>
//             Nike
//             <li className="drop-down-shoes">Shoes</li>
//             <li className="drop-down-clothes">Clothes</li>
//           </li>
//           <li onClick={() => setSelectedBrand("Adidas")}>
//             Adidas
//             <li>Shoes</li>
//             <li>Clothes</li>
//           </li>
//           <li onClick={() => setSelectedBrand("Puma")}>
//             Puma
//             <li>Shoes</li>
//             <li>Clothes</li>
//           </li>
//           <li onClick={() => setSelectedBrand("Outfitters")}>
//             Outfitters
//             <li>Shoes</li>
//             <li>Clothes</li>
//           </li>
//         </div>
//         <div className="nav-right">
//           <Link to="/cart" style={{ color: "black" }}>
//             <ShoppingCartOutlined className="cart-icon" />
//           </Link>
//           <span className="cart-number">{cartNumber}</span>
//         </div>
//       </ul>
//     </div>
//   );
// }

// export default Navbar;

import { Link } from "react-router-dom";
import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Menu, Card } from "antd";
import data from "../clothes/ClothesData";
import "./Navbar.css";

const Navbar = ({ setSelectedBrand, cartNumber, search, setSearch }) => {
  // if (setSelectedBrand(null)) {
  //   setSearch("");
  // }

  const items = [
    {
      key: "SubMenu",
      icon: <MenuOutlined />,
      children: [
        {
          label: <Link onClick={() => setSelectedBrand(null)}>All Cards</Link>,
        },
        {
          type: "group",
          label: "Nike",
          children: [
            {
              label: (
                <Link onClick={() => setSelectedBrand("Nike Shoes")}>
                  Shoes
                </Link>
              ),
              key: "nike-shoes",
            },
            {
              label: (
                <Link onClick={() => setSelectedBrand("Nike Clothes")}>
                  Clothes
                </Link>
              ),
              key: "nike-clothes",
            },
          ],
        },
        {
          type: "group",
          label: "Adidas",
          children: [
            {
              label: (
                <Link onClick={() => setSelectedBrand("Adidas Shoes")}>
                  Shoes
                </Link>
              ),
              key: "adidas-shoes",
            },
            {
              label: (
                <Link onClick={() => setSelectedBrand("Adidas Clothes")}>
                  Clothes
                </Link>
              ),
              key: "adidas-clothes",
            },
          ],
        },
        {
          type: "group",
          label: "Puma",
          children: [
            {
              label: (
                <Link onClick={() => setSelectedBrand("Puma Shoes")}>
                  Shoes
                </Link>
              ),
              key: "puma-shoes",
            },
            {
              label: (
                <Link onClick={() => setSelectedBrand("Puma Clothes")}>
                  Clothes
                </Link>
              ),
              key: "puma-clothes",
            },
          ],
        },
        {
          type: "group",
          label: "Outfitters",
          children: [
            {
              label: (
                <Link onClick={() => setSelectedBrand("Outfitters Shoes")}>
                  Shoes
                </Link>
              ),
              key: "outfitters-shoes",
            },
            {
              label: (
                <Link onClick={() => setSelectedBrand("Outfitters Clothes")}>
                  Clothes
                </Link>
              ),
              key: "outfitters-clothes",
            },
          ],
        },
      ],
    },
  ];

  const handleChange = (e) => {
    const cd = [...data];
    const value = e.target.value;

    // Capitalize the first letter, keep the rest as is
    const capitalized = value.charAt(0).toUpperCase() + value.slice(1);
    // const capitalized = value.replace(/^./, (char) => char.toUpperCase());
    // setSearch(capitalized);
    // const searchInput = String(data.name).match(search);
    // setSearch(searchInput);
    console.debug("Data >>>> ", data, value);
    // const searchData = data.filter((item) => item.name.includes(value));
    const searchData = data.filter((item) => !value.startsWith(item.name));

    console.debug("searchData >>>>> ", searchData);
    if (searchData.length > 0) {
      console.log("Data found! \n" + searchData);
    } else {
      console.log("There is no data which you are looking for.");
    }
    console.log("Your search: ", searchData);
    if (searchData.length > 0) {
      setSearch(searchData);
    }
  };

  return (
    <>
      <div id="searchResults"></div>
      <div className="container">
        <Menu className="menu-container" mode="horizontal" items={items} />
        <input
          type="search"
          name="search"
          className="search"
          placeholder="Search here..."
          autoComplete="off"
          list="search-suggestions"
          onChange={handleChange}
          value={search}
        />
        <Link to="/cart" className="link">
          <ShoppingCartOutlined className="cart-icon" />
          <span className="cart-number">{cartNumber}</span>
        </Link>
      </div>
    </>
  );
};
export default Navbar;
