import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "antd";
import "../App.css";

function IndividualProduct({ cartItems, setCartItems }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state;

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToBag = () => {
    if (!selectedSize) {
      alert("Please select your size!");
    } else {
      const updatedProduct = {
        ...product,
        size: selectedSize,
        title: `${product.color} ${product.fabric} ${product.category}`,
      };
      setCartItems([...cartItems, updatedProduct]);
      alert("Added to bag successfully!");
    }
  };

  return (
    <>
      <section className="product-page">
        <div className="product-image-section">
          <img src={product.image} alt={product.color} className="main-image" />
        </div>
        <div className="product-details-section">
          <h1>{`${product.color}  ${product.category} ${product.fabric}`}</h1>
          <h2>PKR {product.dis_price}</h2>
          <h3 className="original-price">PKR {product.ori_price}</h3>
          <div className="size-options">
            {["S", "M", "L", "XL"].map((size) => (
              <Button
                key={size}
                className={`circle ${selectedSize === size ? "selected" : ""}`}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </Button>
            ))}
          </div>
          <div className="btn-container">
            <Button
              type="default"
              className="add-to-bag-btn"
              onClick={() => navigate("/")}
            >
              Back
            </Button>
            <Button
              type="primary"
              className="add-to-bag-btn"
              onClick={handleAddToBag}
            >
              Add to Bag
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default IndividualProduct;
