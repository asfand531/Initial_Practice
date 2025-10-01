import { useReducer } from "react";
import PracticeChild3 from "./PracticeChild3";

const reducer = (state) => {
  return !state;
};

const initialState = false;

const PracticeChild2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <h2>Boolean: {state ? "TRUE" : "FALSE"}</h2>
        <button onClick={dispatch}>Toggle</button>
      </div>
      <div>
        <PracticeChild3 />
      </div>
    </>
  );
};

export default PracticeChild2;
