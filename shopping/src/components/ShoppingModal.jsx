import { Modal } from "antd";

const ShoppingModal = ({ visible, onClose, formData, cartItems }) => {
  return (
    <Modal
      title="Order Summary"
      open={visible}
      onOk={onClose}
      onCancel={onClose}
      footer={null}
    >
      <h2>Checkout Details</h2>
      {formData && (
        <div>
          {Object.entries(formData).map(([key, value]) => (
            <p key={key}>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
              {value.toUpperCase()}
            </p>
          ))}
        </div>
      )}

      <h2>Cart Details</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <p>
              <strong>Product:</strong> {item.title}
            </p>
            <p>
              <strong>Size:</strong> {item.size}
            </p>
            <p>
              <strong>Price:</strong> PKR {item.dis_price}
            </p>
            _____________________________________________
          </div>
        ))
      ) : (
        <p>No items in the cart.</p>
      )}
    </Modal>
  );
};

export default ShoppingModal;
