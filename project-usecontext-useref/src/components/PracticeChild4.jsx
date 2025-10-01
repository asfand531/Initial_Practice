import { useReducer, useEffect } from "react";
import PracticeChild5 from "./PracticeChild5";

const reducer = (state) => (state === "brown" ? "blue" : "brown");
const initialState = undefined;

const PracticeChild4 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    document.body.style.backgroundColor = state;
  }, [state]);

  return (
    <>
      <div>
        Theme: {state}
        <button onClick={dispatch}>Change Theme</button>
      </div>
      <div>
        <PracticeChild5 />
      </div>
    </>
  );
};

export default PracticeChild4;
