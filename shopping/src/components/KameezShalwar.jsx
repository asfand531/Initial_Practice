import { useState, useEffect } from "react";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";
import FilterSidebar from "./FilterSidebar";
import "../App.css";
import image1 from "../assets/images/f_pic.jpg";
import image2 from "../assets/images/2.jpg";

const { Meta } = Card;

function KameezShalwar() {
  const [cardData, setCardData] = useState([
    {
      id: 1,
      color: "Black",
      fabric: "Blended",
      category: "Semi-Formal",
      dis_percent: 25,
      dis_price: 5999.0,
      ori_price: 7990.0,
      image: image1,
    },
    {
      id: 2,
      color: "Off-White",
      fabric: "Blended",
      category: "Formal",
      dis_percent: 25,
      dis_price: 6370.0,
      ori_price: 8450.0,
      image: image2,
    },
    {
      id: 3,
      color: "Black",
      fabric: "Blended",
      category: "Semi-Formal",
      dis_percent: 25,
      dis_price: 5999.0,
      ori_price: 7990.0,
      image: image1,
    },
    {
      id: 4,
      color: "Black",
      fabric: "Blended",
      category: "Semi-Formal",
      dis_percent: 25,
      dis_price: 5999.0,
      ori_price: 7990.0,
      image: image1,
    },
    {
      id: 5,
      color: "Black",
      fabric: "Blended",
      category: "Semi-Formal",
      dis_percent: 25,
      dis_price: 5999.0,
      ori_price: 7990.0,
      image: image1,
    },
    {
      id: 6,
      color: "Black",
      fabric: "Blended",
      category: "Semi-Formal",
      dis_percent: 25,
      dis_price: 5999.0,
      ori_price: 7990.0,
      image: image1,
    },
    {
      id: 7,
      color: "Black",
      fabric: "Blended",
      category: "Semi-Formal",
      dis_percent: 25,
      dis_price: 5999.0,
      ori_price: 7990.0,
      image: image1,
    },
    {
      id: 8,
      color: "Black",
      fabric: "Blended",
      category: "Semi-Formal",
      dis_percent: 25,
      dis_price: 5999.0,
      ori_price: 7990.0,
      image: image1,
    },
    {
      id: 9,
      color: "Black",
      fabric: "Blended",
      category: "Semi-Formal",
      dis_percent: 25,
      dis_price: 5999.0,
      ori_price: 7990.0,
      image: image1,
    },
  ]);

  const [collection, setCollection] = useState("Kameez Shalwar");
  const [filters, setFilters] = useState({});
  const [filteredData, setFilteredData] = useState(cardData);

  useEffect(() => {
    const applyFilters = () => {
      let data = cardData;

      if (filters.color) {
        data = data.filter((item) => item.color === filters.color);
      }
      if (filters.fabric) {
        data = data.filter((item) => item.fabric === filters.fabric);
      }
      if (filters.category) {
        data = data.filter((item) => item.category === filters.category);
      }

      setFilteredData(data);
    };

    applyFilters();
  }, [filters]);

  const clearFilter = (filterKey) => {
    const newFilters = { ...filters };
    delete newFilters[filterKey];
    setFilters(newFilters);
  };

  const clearAllFilters = () => {
    setFilters({});
    setFilteredData(cardData);
  };

  return (
    <>
      <div className="main-container">
        {/* Sidebar */}
        <section className="filter-sidebar">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            clearFilter={clearFilter}
            clearAllFilters={clearAllFilters}
          />
        </section>
        {/* Product section */}
        <section className="ks-container">
          {filteredData.map((item) => (
            <Card
              key={item.id}
              hoverable
              className="ks-card"
              cover={<img alt="men-ks" src={item.image} />}
            >
              <Meta
                title={`${item.color} ${item.fabric} ${item.category} ${collection}`}
                description={
                  <>
                    <span>
                      {item.dis_percent}% OFF PKR {item.dis_price}
                    </span>{" "}
                    <span className="ori-price">PKR {item.ori_price}</span>
                  </>
                }
              />
              <Link to={`/product/${item.id}`} state={{ product: item }}>
                <Button variant="solid" color="blue" className="add-bag-btn">
                  see more
                </Button>
              </Link>
            </Card>
          ))}
        </section>
      </div>
      <div>

      </div>
    </>
  );
}

export default KameezShalwar;
