import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";

function CartDetails({ cartItems }) {
  const navigate = useNavigate();
  // const dataSource = Object.keys(cartItems).map((key) => ({
  //   key,
  //   name: cartItems[key].name,
  //   desc: cartItems[key].desc,
  //   count: cartItems[key].count,
  // }));

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "Count",
      dataIndex: "count",
      key: "count",
    },
  ];

  return (
    <>
      <div style={{ margin: 80 }}>
        <Table columns={columns} dataSource={cartItems} pagination={false} />
        <div style={{ marginTop: "30px", textAlign: "right" }}>
          <Button type="primary" onClick={() => navigate("/shoes")}>
            Back to Shop
          </Button>
        </div>
      </div>
    </>
  );
}

export default CartDetails;
