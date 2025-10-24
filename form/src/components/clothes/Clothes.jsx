import { useEffect } from "react";
import { Card } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import data from "../clothes/ClothesData";

const { Meta } = Card;

function Clothes({
  selectedBrand,
  setCartCount,
  cartItems,
  setCartItems,
  search,
}) {
  useEffect(() => {
    console.log("Updated Product Data: ", cartItems);
  }, [cartItems]);

  // This function is used to add the items in the cart as an array.
  function btnClick(params) {
    const { key, name, desc, label, image, alt } = params;

    // Increase cart count to 1.
    setCartCount((prev) => prev + 1);

    // Update cart items with count logic.
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.key === key);

      if (existingItem) {
        return prevItems.map((i) =>
          i.key === key ? { ...i, count: i.count + 1 } : i
        );
      } else {
        return [...prevItems, { key, name, desc, count: 1 }];
      }
    });
  }

  // This function is used to add the items in the cart as an object.
  // function btnClick(params) {
  //   const { key, name, desc } = params;

  //   setCartCount((prev) => prev + 1);

  //   const updatedCart = { ...cartItems };
  //   if (updatedCart[key]) {
  //     updatedCart[key].count += 1;
  //   } else {
  //     updatedCart[key] = { name, desc, count: 1 };
  //   }
  //   setCartItems(updatedCart);
  // }

  const filteredData =
    selectedBrand === null
      ? data
      : data.filter((item) => item.label === selectedBrand);

  const filter = data.filter((i) => i.name === search);
  console.log("Search Filter: ", filter);
  console.log("Input Search: ", search);

  return (
    <>
      <div className="card-container" style={{ background: "#f1e9d9" }}>
        {(search ? filter : filteredData).map((item) => (
          <Card
            hoverable
            key={item.key}
            style={{
              width: 250,
              height: 500,
              margin: "10px",
              overflow: "hidden",
            }}
            className="card"
            cover={
              <img src={item.image} alt={item.alt} style={{ height: 250 }} />
            }
            data={data}
          >
            <PlusCircleFilled
              key={item.key}
              onClick={() =>
                btnClick({
                  key: item.key,
                  name: item.name,
                  desc: item.desc,
                  image: item.image,
                  label: item.label,
                  alt: item.alt,
                })
              }
            />
            <Meta title={item.name} description={item.desc} />
          </Card>
        ))}
      </div>
    </>
  );
}

export default Clothes;
