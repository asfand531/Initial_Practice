import { useReducer } from "react";
import PracticeChild from "./PracticeChild";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: true,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "Complete":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            complete: todo.complete,
          };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
const ChildD = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "Complete", id: todo.id });
  };

  return (
    <>
      <div>
        {todos.map((todo) => (
          <section key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleComplete(todo)}
              />
              {todo.title}
            </label>
          </section>
        ))}
      </div>
      <PracticeChild />
    </>
  );
};

export default ChildD;
