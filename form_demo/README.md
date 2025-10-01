# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




import { Button, Form, Input, Select, Space, InputNumber } from "antd";
import { useEffect } from "react";

const { Option } = Select;

const EmployeeForm = ({
  formData,
  setFormData,
  isEdit,
  setIsEdit,
  handleSearch,
  onFinish,
  handleReset,
  search,
  setSearch,
}) => {
  const [form] = Form.useForm();

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    form.setFieldsValue(formData);
  }, [formData, form]);

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.trim() === "") {
      handleSearch("");
    }
  };

  const resetFormFields = () => {
    form.resetFields();
    setFormData({ id: "", name: "", age: "", gender: "" });
  };

  return (
    <>
      <section>
        <Form>
          <Form.Item name="search" label="Search">
            <Input
              placeholder="Search here..."
              type="search"
              value={search}
              onChange={handleSearchInput}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={() => handleSearch(search)}>
              Search
            </Button>
          </Form.Item>
        </Form>
      </section>
      <section>
        <Form
          form={form}
          name="control-hooks"
          onFinish={() => {
            onFinish();
            resetFormFields();
          }}
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Input your name!" }]}
          >
            <Input
              placeholder="Write your name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="age"
            label="Age"
            rules={[{ required: true, message: "Input your age!" }]}
          >
            <InputNumber
              placeholder="Write your age"
              style={{ width: "100%" }}
              value={formData.age}
              onChange={(value) => handleChange("age", value)}
            />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: "Select your gender!" }]}
          >
            <Select
              placeholder="Select your gender"
              allowClear
              value={formData.gender}
              onChange={(value) => handleChange("gender", value)}
            >
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                {isEdit ? "Update" : "Create"}
              </Button>
              <Button htmlType="button" onClick={resetFormFields}>
                Reset
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </section>
    </>
  );
};

export default EmployeeForm;
