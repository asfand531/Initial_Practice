import { useEffect, useReducer } from "react";
import PracticeChild4 from "./PracticeChild4";

const reducer = (state, action) => {
  return { ...state, [action.field]: action.value };
};

const initialState = {
  name: "",
  email: "",
};

const PracticeChild3 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("For the first time!");
  }, []);

  return (
    <>
      <div>
        <h1>Form Field</h1>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={(e) => {
                dispatch({ field: "name", value: e.target.value });
              }}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="name"
              value={state.email}
              onChange={(e) => {
                dispatch({ field: "email", value: e.target.value });
              }}
            />
          </label>
          <button
            onClick={() => {
              dispatch(state);
            }}
          >
            Reset
          </button>
        </form>
      </div>
      <div>Name: {state.name}</div>
      <div>Email: {state.email}</div>

      <div>
        <PracticeChild4 />
      </div>
    </>
  );
};

export default PracticeChild3;
