import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";

function CartDetails({ cartItems }) {
  const navigate = useNavigate();

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img src={image} alt="Product" style={{ width: 50 }} />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Price",
      dataIndex: "dis_price",
      key: "dis_price",
      render: (price) => `PKR ${price}`,
    },
  ];

  return (
    <>
      <div style={{ margin: 80 }}>
        <h2>Cart Details</h2>
        <Table columns={columns} dataSource={cartItems} pagination={false} />
        <div style={{ marginTop: "30px", textAlign: "right" }}>
          <Button type="default" onClick={() => navigate("/")}>
            Back to Shop
          </Button>
          &emsp;
          <Button
            type="primary"
            disabled={!cartItems || cartItems.length === 0}
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
}

export default CartDetails;
