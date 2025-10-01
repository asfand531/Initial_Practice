import { Button, Form, Input, Select, Space } from "antd";
import { useState } from "react";
import ShoppingModal from "./ShoppingModal";
import "../App.css";

const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Checkout = ({ cartItems }) => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    province: "",
    city: "",
    zip: "",
    number: "",
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const cityOptions = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Sialkot",
  ];
  const countryOptions = ["Pakistan", "India", "USA", "UAE", "UK"];

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const onFinish = () => {
    setIsModalVisible(true);
  };

  const onReset = () => {
    setFormData({
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      country: "",
      province: "",
      city: "",
      zip: "",
      number: "",
    });
    form.resetFields();
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const validEmail = "[a-zA-Z0-7._]+@gmail.com";
  const validPhoneNo = "(., '^d{10}$')";
  // console.log(validEmail.match());

  return (
    <>
      <div className="checkout-form-container">
        <Form
          {...layout}
          form={form}
          name="checkout-form"
          onFinish={onFinish}
          className="form"
          initialValues={formData}
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
              {
                pattern: validEmail, // Using regex
                message: "Your email must have domain @gmail.com",
              },
              // {
              //   pattern: '[^]@gmail.com',
              //   message: "Your email must have domain @gmail.com",
              // },
            ]}
          >
            <Input
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              { required: true, message: "Please enter your first name!" },
            ]}
          >
            <Input
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              { required: true, message: "Please enter your last name!" },
            ]}
          >
            <Input
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: "Please enter your address!" }]}
          >
            <Input
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="country"
            label="Country"
            rules={[{ required: true, message: "Please select your country!" }]}
          >
            <Select
              placeholder="Select your country"
              value={formData.country}
              onChange={(value) => handleChange("country", value)}
              allowClear
            >
              {countryOptions.map((item, index) => (
                <Option key={index} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="province"
            label="Province"
            rules={[{ required: true, message: "Please enter your province!" }]}
          >
            <Input
              value={formData.province}
              onChange={(e) => handleChange("province", e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="city"
            label="City"
            rules={[{ required: true, message: "Please select your city!" }]}
          >
            <Select
              placeholder="Select your city"
              value={formData.city}
              onChange={(value) => handleChange("city", value)}
              allowClear
            >
              {cityOptions.map((item, index) => (
                <Option key={index} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="zip"
            label="Zip/Postal Code"
            rules={[
              { required: true, message: "Please enter your zip/postal code!" },
              { pattern: /^\d{5}$/, message: "Zip code must be 5 digits!" },
            ]}
          >
            <Input
              value={formData.zip}
              onChange={(e) => handleChange("zip", e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="number"
            label="Phone Number"
            rules={[
              { required: true, message: "Please enter your phone number!" },
              {
                pattern: /^\d{10,15}$/,
                message: "Enter a valid phone number!",
              },
            ]}
          >
            <Input
              value={formData.number}
              onChange={(e) => handleChange("number", e.target.value)}
            />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>

      <ShoppingModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        formData={formData}
        cartItems={cartItems}
      />
    </>
  );
};

export default Checkout;
