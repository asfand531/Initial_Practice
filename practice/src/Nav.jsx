import { useState } from "react";

function Nav() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [maritalStatus, setMaritalStatus] = useState(["Single", "Married"]);
  const [m_status, setM_Status] = useState("");

  const items = ["Home", "About", "Contact"];
  const animals = ["dog", "cat", "lion"];
  const upper = animals.map(
    (animal) => animal.charAt(0).toUpperCase() + animal.slice(1)
  );
  const users = [
    { name: "Ali", hobbies: ["reading", "cycling"] },
    { name: "Sara", hobbies: ["painting"] },
  ];
  const pickHobbies = users.map((user) => user.hobbies.length);
  console.log("hobby counts: ", pickHobbies);

  const nums = [1, 2, 3, 4, 5];
  const mapNums = nums.map((num) => num * 2);
  const filterNums = mapNums.filter((num) => num > 5);
  console.log(filterNums);

  const ages = [18, 21, 16];
  const mapAges = ages.map((age) => (age < 18 ? "minor" : "adult"));
  console.log(mapAges);

  const prices = [10, 20];
  const filterPrice = prices.map((price, index) => {
    return {
      price,
      index: index + 1,
    };
  });
  console.log(filterPrice);

  const mixed = [1, "2", true, null];
  const convertString = mixed.map((value) => String(value));
  console.log(convertString);
  console.log(typeof convertString);

  // Make two array of objects where first-one have name, age and the second-one have gender. Now make it single array of objects.

  const user1 = [
    {
      name: "Asfand",
      age: 21,
    },
    {
      name: "Bilal",
      age: 34,
    },
    {
      name: "Zaheer",
      age: 9,
    },
    {
      name: "Asif",
      age: 13,
    },
    {
      name: "Younus",
      age: 32,
    },
  ];

  const user2 = [
    {
      gender: "Male",
    },
    {
      gender: "Male",
    },
    {
      gender: "Male",
    },
    {
      gender: "Male",
    },
    {
      gender: "Male",
    },
  ];

  const user3 = [
    {
      street: "Street # 45",
    },
    {
      street: "Street # 54",
    },
    {
      street: "Street # 1",
    },
    {
      street: "Street # 33",
    },
    {
      street: "Street # 4",
    },
  ];

  // console.log(user1.name)
  //   const fUser = user1.map((user) => user.name || user.age);

  //   const sUser = user2.map((user) => user.gender);
  //   const combinedData = fUser.concat(sUser);
  //   const com = combinedData.map((name, age, gender) => {
  //     return {
  //       name,
  //       age,
  //       gender: gender,
  //     };
  //   });

  //   console.log(combinedData);
  //   console.log(com);

  const combinedUserData = user1.map((user, index) => ({
    ...user,
    ...user2[index],
    ...user3[index],
  }));
  console.log(combinedUserData);

  function onSubmit() {
    console.log(name, age, maritalStatus);
  }

  return (
    <>
      <div>
        {items.map((item) => {
          return <li key={item}>{item}</li>;
        })}
        {upper.join(" ")}
        <br />
        {pickHobbies.join(" ")}
      </div>
      <div>
        <form onSubmit={() => onSubmit()}>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label htmlFor="age">
            Age:
            <input
              type="number"
              name="age"
              id="age"
              placeholder="Your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </label>

          <label htmlFor="m_status">
            Marital Status:
            <select
              name="m_status"
              id="m_status"
              value={m_status}
              onChange={(e) => setM_Status(e.target.value)}
            >
              <option disabled>Select your option</option>
              {maritalStatus.map((item) => (
                <>
                  <option key={item} value={item}>
                    {item}
                  </option>
                </>
              ))}
            </select>
          </label>
          <button>Submit</button>
        </form>

        <p>
          Name: {name.trim()} <br />
          Age: {age} <br /> Marital Status: {m_status}
        </p>
        <p>{onSubmit}</p>
      </div>
    </>
  );
}

export default Nav;
