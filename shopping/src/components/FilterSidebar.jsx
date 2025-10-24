import { Layout, Collapse, Button, Radio } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "../App.css";

const { Sider } = Layout;
const { Panel } = Collapse;

const FilterSidebar = ({
  filters,
  setFilters,
  clearFilter,
  clearAllFilters,
}) => {
  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const fabric = ["Cotton", "Blended", "Semi-Blended"];

  const color = ["Black", "White", "Brown", "Blue", "Cream", "Off-White"];

  const category = [
    "Formal",
    "Semi-Formal",
    "Casual",
    "Peshawari Chappal",
    "Footwear",
  ];

  return (
    <Sider width={300} className="filter-sidebar">
      <div className="filter-container">
        <h3>NOW SHOPPING BY</h3>
        <div className="active-filters">
          {Object.entries(filters).map(([key, value]) => (
            <div key={key} className="filter-item">
              {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
              <Button
                type="link"
                danger
                onClick={() => clearFilter(key)}
                style={{ marginLeft: "8px" }}
              >
                <CloseOutlined />
              </Button>
            </div>
          ))}
          {Object.keys(filters).length > 0 && (
            <Button type="link" onClick={clearAllFilters}>
              Clear All
            </Button>
          )}
        </div>

        <h3>SHOPPING OPTIONS</h3>
        <Collapse bordered={false} defaultActiveKey={"1"}>
          <Panel header="Fabric" key="1">
            <Radio.Group
              onChange={(e) => handleFilterChange("fabric", e.target.value)}
            >
              {fabric.map((f, i) => {
                return (
                  <Radio key={i} value={f}>
                    {f}
                  </Radio>
                );
              })}
            </Radio.Group>
          </Panel>
          <Panel header="Color Family" key="2">
            <Radio.Group
              onChange={(e) => handleFilterChange("color", e.target.value)}
            >
              {color.map((c, i) => {
                return (
                  <Radio key={i} value={c}>
                    {c}
                  </Radio>
                );
              })}
            </Radio.Group>
          </Panel>
          <Panel header="Category" key="3">
            <Radio.Group
              onChange={(e) => handleFilterChange("category", e.target.value)}
            >
              {category.map((c, i) => {
                return (
                  <Radio key={i} value={c}>
                    {c}
                  </Radio>
                );
              })}
            </Radio.Group>
          </Panel>
        </Collapse>
      </div>
    </Sider>
  );
};

export default FilterSidebar;
