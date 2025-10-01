import { useState } from "react";
function FromPart5() {
  // 12. Render a list of users from a given array of objects.
  const arrayObj = [
    { id: 1, name: "Osama", age: 12 },
    { id: 2, name: "Qaiser", age: 32 },
    { id: 3, name: "Raza", age: 45 },
  ];

  // 13. Build TodoList
  const todo = [
    {
      id: 1,
      name: "Work",
      desc: "This is the description for work todo!",
    },
    {
      id: 2,
      name: "Grocery",
      desc: "This is the description for grocery todo!",
    },
    {
      id: 3,
      name: "Demo",
      desc: "This is the description for demo todo!",
    },
  ];

  return (
    <>
      {/* 12. Render a list of users from a given array of objects. */}
      <div>
        <ul>
          {arrayObj.map((item) => (
            <li key={item.id}>
              Name: {item.name}, Age: {item.age}
            </li>
          ))}
        </ul>
      </div>

      {/* 13. Build TodoList */}
      <div>
        {todo.map((item) => (
          <ul key={item.id}>
            <li key={item.id}>
              Todo Name: {item.name} <br /> Todo Description: {item.desc}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default FromPart5;
