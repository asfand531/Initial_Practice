import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const empData = [
    {
      id: 1423,
      firstName: "Asfand",
      lastName: "Bilal",
      age: 21,
    },
    {
      id: 1323,
      firstName: "Furqan",
      lastName: "Ahmad",
      age: 27,
    },
    {
      id: 2312,
      firstName: "Emmar",
      lastName: "Chaudary",
      age: 32,
    },
    {
      id: 7419,
      firstName: "Hasham",
      lastName: "Raiz",
      age: 43,
    },
    {
      id: 2395,
      firstName: "Yasir",
      lastName: "Khan",
      age: 35,
    },
  ];

  const [data, setData] = useState([]);
  const [empId, setEmpId] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState();
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setData(empData);
  }, []);

  console.log(data);

  const handleEdit = (id) => {
    const edtItem = data.filter((item) => item.id === id);
    if (edtItem !== undefined) {
      setIsUpdate(true);
      setEmpId(id);
      setFirstName(edtItem[0].firstName);
      setLastName(edtItem[0].lastName);
      setAge(edtItem[0].age);
    }
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this data?")) {
      const delItem = data.filter((item) => item.id !== id); // Yeh data state myn jitny b rows hy os ko filter krdy ga os id k sath jo id hm paas kr rhy hyn. Toh os ko choor k jo data ho ga voh hmyn return krdy ga.
      setData(delItem);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const dt = [...data];
    const newObject = {
      id: Number(empId),
      firstName: firstName,
      lastName: lastName,
      age: Number(age),
    };
    dt.push(newObject);
    setData(dt);
    handleClear();
  };

  const handleUpdate = () => {
    const index = data.findIndex((item) => item.id === Number(empId)); // This is used to fetch the index of the data. For example, in this case, we use id to fetch the index.

    if (index === -1) {
      alert("Employee not found!");
      return;
    }

    dt[index] = {
      ...dt[index],
      firstName: firstName, // First vala firstName voh data state jo k array ha, os ki property ha (dt[index].firstName) and last vala jo ha voh state ha (= firstName);.
      lastName: lastName,
      age: Number(age),
    };

    setData(dt);
    handleClear(); // For clearing the input after updating the data.
  };

  const handleClear = () => {
    setEmpId("");
    setFirstName("");
    setLastName("");
    setAge("");
    setIsUpdate(false);
  };

  return (
    <>
      <div className="edit">
        <label htmlFor="empId">
          <input
            type="number"
            placeholder="Employee ID"
            name="empId"
            value={empId}
            id="empId"
            onChange={(e) => setEmpId(e.target.value)}
            required
          />
        </label>
        &emsp;
        <label htmlFor="fname">
          <input
            type="text"
            placeholder="First Name"
            name="fname"
            value={firstName}
            id="lname"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        &emsp;
        <label htmlFor="lname">
          <input
            type="text"
            placeholder="Last Name"
            name="lname"
            value={lastName}
            id="lname"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        &emsp;
        <label htmlFor="age">
          <input
            type="number"
            placeholder="Age"
            name="age"
            value={age}
            id="age"
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </label>
        &emsp;
        {isUpdate === false ? (
          <button onClick={() => handleSave()}>Save</button>
        ) : (
          <button onClick={() => handleUpdate()}>Update</button>
        )}
        &emsp;<button onClick={() => handleClear()}>Clear</button>
      </div>
      <br />
      <br />
      <div>
        <table>
          <thead>
            <tr className="heading">
              <th>Sr.</th>
              <th>Emp_ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.age}</td>
                  <td>
                    <button onClick={() => handleEdit(item.id)}>Edit</button>
                    &emsp;
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
