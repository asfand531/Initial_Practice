import { Layout, Collapse, Button, Radio } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "../App.css";

const { Sider } = Layout;
const { Panel } = Collapse;

const FilterSidebar = ({
  filters,
  setFilters,
  applyFilters,
  clearFilter,
  clearAllFilters,
}) => {
  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

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
              <Radio value="Cotton">Cotton</Radio>
              <Radio value="Blended">Blended</Radio>
            </Radio.Group>
          </Panel>
          <Panel header="Color Family" key="2">
            <Radio.Group
              onChange={(e) => handleFilterChange("color", e.target.value)}
            >
              <Radio value="Black">Black</Radio>
              <Radio value="White">White</Radio>
              <Radio value="Brown">Brown</Radio>
              <Radio value="Blue">Blue</Radio>
              <Radio value="Cream">Cream</Radio>
              <Radio value="Off-White">Off-White</Radio>
            </Radio.Group>
          </Panel>
          <Panel header="Category" key="3">
            <Radio.Group
              onChange={(e) => handleFilterChange("category", e.target.value)}
            >
              <Radio value="Formal">Formal</Radio>
              <Radio value="Semi-Formal">Semi-Formal</Radio>
              <Radio value="Casual">Casual</Radio>
              <Radio value="Peshawari Chappal">Peshawari Chappal</Radio>
              <Radio value="Footwear">Footwear</Radio>
            </Radio.Group>
          </Panel>
        </Collapse>
      </div>
    </Sider>
  );
};

export default FilterSidebar;
