import { useCallback, useEffect, useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      if (action.text === "") {
        alert("There must be some text to add todos!");
      }
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
        },
      ];
    case "remove":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const PracticeChild5 = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  function addTodo() {
    dispatch({ type: "add", text: input });
    // setInput("");
  }

  const data = useCallback(() => {
      addTodo();
  }, [todos]);

  useEffect(() => {
    console.log("useEffect called!");
  }, [todos, data]);

  return (
    <>
      <div>
        <input
          type="text"
          name="todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch({ type: "remove", id: todo.id })}>
              Remove
            </button>
          </li>
        ))}
      </div>
    </>
  );
};

export default PracticeChild5;
