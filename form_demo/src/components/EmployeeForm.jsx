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
    setIsEdit(false);
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
