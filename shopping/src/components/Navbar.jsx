import { Link } from "react-router-dom";
import { Menu } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";
import "../App.css";

const items = [
  { key: "home", label: <Link to="/">Home</Link> },
  {
    key: "kameezShalwar",
    label: <Link to="/kameezshalwar">Kameez Shalwar</Link>,
  },
  { key: "kurta", label: <Link to="/kurta">Kurta</Link> },
  { key: "unstitched", label: <Link to="/unstitched">Unstitched</Link> },
  { key: "footwear", label: <Link to="/footwear">Footwear</Link> },
  { key: "caps", label: <Link to="/caps">Caps</Link> },
];

const Navbar = ({ cartCount }) => {
  const [current, setCurrent] = useState("home");

  const onClick = (e) => setCurrent(e.key);

  return (
    <div className="navbar-container">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        className="navbar"
      />
      <Link to="/cart" className="cart-link">
        <ShoppingCartOutlined className="cart-icon" />
        <span className="cart-count">{cartCount}</span>
      </Link>
    </div>
  );
};

export default Navbar;
