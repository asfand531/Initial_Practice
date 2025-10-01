import { useReducer } from "react";
import PracticeChild2 from "./PracticeChild2";

/**
 * Note:
 * reducer: A function that tells how to update the state.
 * initialState: The initial value of the state.
 * state: The current state.
 * dispatch: A function to send actions to the reducer.
 */

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "increment":
      return { count: state.count + action.step };
    case "decrement":
      if (state.count < 1) {
        return { count: 0 };
      }
      return { count: state.count - action.step };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

const initialState = { count: 0 };

const PracticeChild = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h2>Count: {state.count}</h2>
        <button onClick={() => dispatch({ type: "increment", step: 5 })}>
          Increase
        </button>
        <button onClick={() => dispatch({ type: "decrement", step: 3 })}>
          Decrease
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <PracticeChild2 />
    </>
  );
};

export default PracticeChild;
