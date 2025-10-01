import { useState } from "react";

function FormExample() {
  const [input, setInput] = useState({
    name: "",
    age: "",
    gender: "",
    car: "",
  });
  const [cars] = useState(["Ford", "BMW", "Audi", "Nissan"]);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    if (name === "age") {
      let ageValue = Number(value);
      if (ageValue < 1) {
        alert("Age must be greater than 1.");
        ageValue = "";
      }
      setInput((prev) => ({
        ...prev,
        age: ageValue,
      }));
    } else if (type === "radio") {
      setInput((prev) => ({
        ...prev,
        gender: value,
      }));
    } else {
      setInput((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCarChange = (e) => {
    setInput((prev) => ({
      ...prev,
      car: e.target.value,
    }));
  };

  return (
    <>
      <div>
        <form>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={input.name}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="age">
            Age:
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={input.age}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Gender:
            <label htmlFor="male" style={{ cursor: "pointer" }}>
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={handleInputChange}
                style={{ cursor: "pointer" }}
              />
              Male
            </label>
            <label htmlFor="female" style={{ cursor: "pointer" }}>
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={handleInputChange}
                style={{ cursor: "pointer" }}
              />
              Female
            </label>
          </label>
          <select
            name="car"
            id="car"
            value={input.car}
            onChange={handleCarChange}
          >
            <option value="" disabled>
              Select a car
            </option>
            {cars.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </form>
      </div>
      <div style={{ marginTop: 30 }}>
        Name: {input.name} <br /> Age: {input.age}
        <br />
        Gender: {input.gender}
        <br />
        Your car: {input.car}
      </div>
    </>
  );
}

export default FormExample;
