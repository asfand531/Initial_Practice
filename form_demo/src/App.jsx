import { useState } from "react";
import { Table, Button } from "antd";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    gender: "",
  });
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [search, setSearch] = useState("");
  const [id, setId] = useState(1);

  const onFinish = () => {
    if (isEdit) {
      const updatedData = data.map((item) =>
        item.id === formData.id ? { ...formData } : item
      );
      setData(updatedData);
      setFilteredData(updatedData);
      setIsEdit(false);
    } else {
      const newData = [...data, { ...formData, id: id }];
      setData(newData);
      setFilteredData(newData);
      setId((prev) => prev + 1);
    }
    setFormData({ id: "", name: "", age: "", gender: "" });
  };

  const handleEdit = (id) => {
    const editItem = data.find((item) => item.id === id);
    if (editItem) {
      setFormData(editItem);
      setIsEdit(true);
    }
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    setFilteredData(updatedData);
  };

  const handleSearch = (searchValue) => {
    if (searchValue.trim() === "") {
      setFilteredData(data);
    } else {
      const lowerSearch = searchValue.toLowerCase();
      const filtered = data.filter(
        (item) =>
          item.name.toLowerCase().includes(lowerSearch) ||
          String(item.age).includes(lowerSearch) ||
          item.gender.toLowerCase() === lowerSearch
      );
      setFilteredData(filtered);
    }
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    {
      title: "Actions",
      render: (item) => (
        <>
          <Button type="primary" onClick={() => handleEdit(item.id)}>
            Edit
          </Button>
          &nbsp;
          <Button
            variant="solid"
            color="danger"
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <EmployeeForm
        formData={formData}
        setFormData={setFormData}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        onFinish={onFinish}
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
      <Table columns={columns} dataSource={filteredData} rowKey="id" />
    </>
  );
}

export default App;
