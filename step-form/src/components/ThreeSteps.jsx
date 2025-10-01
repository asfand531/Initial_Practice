import { useState } from "react";
import { Button, Steps, theme, Form, Input, InputNumber, Select } from "antd";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import InfoModal from "./InfoModal";

const { Option } = Select;

const ThreeSteps = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  const citiesByCountry = {
    pk: ["Islamabad", "Lahore", "Karachi", "Rawalpindi", "Skardu", "Taxila"],
    us: ["New York", "Los Angeles", "Chicago", "Houston", "San Francisco"],
    gb: ["London", "Manchester", "Birmingham", "Liverpool"],
    in: ["Delhi", "Mumbai", "Bangalore", "Chennai"],
  };

  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("pk");
  const [cities, setCities] = useState(citiesByCountry["pk"]);

  const genderValues = ["Male", "Female", "Other"];
  const [form] = Form.useForm();

  const handleChange = (value, countryData) => {
    const selectedCountry = countryData.countryCode;
    console.log(countryData);
    console.log("Country:", selectedCountry);

    setPhone(value);
    setCountry(selectedCountry);
    setCities(citiesByCountry[selectedCountry] || []);

    form.setFieldsValue({
      phone: value,
      city: undefined,
    });
  };

  const validEmail = "/^[a-zA-Z0-9._%+-]+@gmail.com$/";

  const steps = [
    {
      title: "Basic Info",
      content: (
        <>
          <Form.Item
            label="Name"
            name="Name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            label="Age"
            name="Age"
            rules={[
              {
                required: true,
                message: "Please input your age!",
              },
            ]}
          >
            <InputNumber
              style={{ width: "100%" }}
              placeholder="Enter your age"
            />
          </Form.Item>

          <Form.Item
            label="Gender"
            name="Gender"
            rules={[{ required: true, message: "Please select your gender!" }]}
          >
            <Select placeholder="Select your gender" allowClear>
              {genderValues.map((gender) => (
                <Option key={gender.toLowerCase()} value={gender.toLowerCase()}>
                  {gender}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </>
      ),
    },
    {
      title: "Contact Info",
      content: (
        <>
          <Form.Item
            label="Email"
            name="Email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input a valid email!",
              },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Phone is required" }]}
          >
            <PhoneInput
              value={phone}
              country={country}
              onChange={handleChange}
              inputStyle={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: "City is required" }]}
          >
            <Select placeholder="Choose city">
              {cities.map((c) => (
                <Option key={c} value={c}>
                  {c}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </>
      ),
    },
    {
      title: "Finish",
      content: <p>Click "Submit" to complete the form.</p>,
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle = {
    padding: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const mergeFormData = async () => {
    try {
      const currentValues = await form.validateFields();
      setFormData((prev) => ({
        ...prev,
        ...currentValues,
      }));
      return true;
    } catch (err) {
      console.log("Validation failed on step", current, err);
      return false;
    }
  };

  const next = async () => {
    const success = await mergeFormData();
    if (success) {
      setCurrent(current + 1);
    }
  };

  const onFinish = async () => {
    const success = await mergeFormData();
    if (success) {
      setIsModalVisible(true);
      console.log("Submitted Data:", formData);
    }
  };

  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>
        <Form
          form={form}
          layout="vertical"
          initialValues={formData}
          autoComplete="off"
        >
          {steps[current].content}
        </Form>
      </div>

      <div style={{ marginTop: 24 }}>
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={prev}>
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={next}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={onFinish}>
            Submit
          </Button>
        )}
      </div>

      {isModalVisible && (
        <InfoModal
          formData={formData}
          isModalOpen={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      )}
    </>
  );
};

export default ThreeSteps;
